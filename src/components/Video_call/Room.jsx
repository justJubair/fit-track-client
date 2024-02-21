'use client'
import { useSocket } from '@/app/context/SocketProvider';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import peer from "./service/peer"

const Room = () => {
    const socket = useSocket()
    const [remoteSocketId, setRemoteSocketId] = useState(null)
    const [myStream, setMyStream] = useState(null)


    const handelUserJoin = useCallback(({ email, id }) => {
        console.log(`email ${email} join room`)
        setRemoteSocketId(id)
    }, [])
    const handleIncomingCall = useCallback(({ from, offer }) => {
        console.log(`incoming call ${from}`)
    }, [])

    useEffect(() => {
        socket.on("user:joined", handelUserJoin)
        socket.on("incoming:call", handleIncomingCall)
        return () => {
            socket.off('user:joined', handelUserJoin)
            socket.off("incoming:call", handleIncomingCall)
        }
    }, [socket, handelUserJoin, handleIncomingCall])

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
                <ReactPlayer height={300} width={400} playing={true} url={myStream} />
            }
        </div>
    );
};

export default Room;