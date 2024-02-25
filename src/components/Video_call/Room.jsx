'use client'
import { useSocket } from '@/app/context/SocketProvider';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import peer from "./service/peer"

const Room = () => {
    const socket = useSocket()
    const [remoteSocketId, setRemoteSocketId] = useState(null)
    const [myStream, setMyStream] = useState(null)
    const [remoteStream, setRemoteStream] = useState()


    const handelUserJoin = useCallback(({ email, id }) => {
        console.log(`email ${email} join room`)
        setRemoteSocketId(id)
    }, [])

    const handleIncomingCall = useCallback(async ({ from, offer }) => {
        setRemoteSocketId(from)
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        setMyStream(stream)
        // console.log(`incoming call ${from},${offer}`)
        const ans = await peer.getAnswer(offer)
        socket.emit("call:accepted", { to: from, ans })

    }, [socket])

    const sendSteams = useCallback(() => {
        for (const track of myStream.getTracks()) {
            peer.peer.addTrack(track, myStream)
        }
    }, [myStream])

    const handelCallAccepted = useCallback(({ from, ans }) => {
        peer.setLocalDescription(ans)
        console.log(`call accepted yahoooooo!`)
        sendSteams()

    }, [sendSteams])

    const handelNegoNeeded = useCallback(async () => {
        const offer = await peer.getOffer()
        socket.emit('peer:nego:needed', { offer, to: remoteSocketId })
    }, [remoteSocketId, socket])



    useEffect(() => {
        peer.peer.addEventListener('negotiationneeded', handelNegoNeeded)
        return () => {
            peer.peer.removeEventListener('negotiationneeded', handelNegoNeeded)
        }
    }, [handelNegoNeeded])

    const handelNegoNeedIncoming = useCallback(async ({ from, offer }) => {
        const ans = await peer.getAnswer(offer)
        socket.emit("peer:nego:done", { to: from, ans })
    }, [socket])

    const handelNegoNeedFinal = useCallback(async ({ ans }) => {
        await peer.setLocalDescription(ans)
    }, [])

    useEffect(() => {
        peer.peer.addEventListener('track', async ev => {
            const remoteStream = ev.streams
            console.log(`got tracks`)
            setRemoteStream(remoteStream[0])
        })
    }, [])
    useEffect(() => {
        socket.on("user:joined", handelUserJoin)
        socket.on("incoming:call", handleIncomingCall)
        socket.on("call:accepted", handelCallAccepted)
        socket.on("peer:nego:needed", handelNegoNeedIncoming)
        socket.on("peer:nego:final", handelNegoNeedFinal)

        return () => {
            socket.off('user:joined', handelUserJoin)
            socket.off("incoming:call", handleIncomingCall)
            socket.off("call:accepted", handelCallAccepted)
            socket.off("peer:nego:needed", handelNegoNeedIncoming)
            socket.off("peer:nego:final", handelNegoNeedFinal)
        }
    }, [socket, handelUserJoin, handleIncomingCall, handelCallAccepted, handelNegoNeedIncoming, handelNegoNeedFinal])

    const handelCallUser = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        const offer = await peer.getOffer();
        socket.emit("user:call", { to: remoteSocketId, offer })
        setMyStream(stream)
    }, [remoteSocketId, socket])

    return (
        <div>
            <h1>this is room </h1>
            <p className='text-3xl font-bold'>{remoteSocketId ? "Connected" : "no one in Room"}</p>
            {
                remoteSocketId && <button
                    onClick={handelCallUser}
                    className='p-4 bg-red-400 rounded-3xl'>Call</button>
            }
            {
                myStream &&
                <button
                    className='bg-green-200'
                    onClick={sendSteams}
                >
                    send Stream
                </button>
            }
            {
                myStream &&
                <>
                    <h1>My Stream</h1>
                    <ReactPlayer
                        height={300}
                        width={400}
                        playing
                        url={myStream}
                    />
                </>
            }
            {
                remoteStream &&
                <>
                    <h1>remote Stream</h1>
                    <ReactPlayer
                        height={300}
                        width={400}
                        playing
                        url={remoteStream}
                    />
                </>
            }
        </div>
    );
};

export default Room;