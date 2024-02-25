"use client"

import { useSocket } from "@/app/context/SocketProvider";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";


const Video_call = () => {
    const [email, setEmail] = useState("")
    const [room, setRoom] = useState("")
    const socket = useSocket()
    const router = useRouter();


    const handelVideoCall = useCallback(
        (e) => {
            e.preventDefault()
            socket.emit("room:join", { email, room })
        },
        [email, room, socket]
    )

    const handelJoinRoom = useCallback((data) => {
        const { email, room } = data
        console.log(email, room)
        // redirect(`/video_call/${room}`)
        router.push(`/video_call/${room}`);
    }, [router])

    useEffect(() => {
        socket.on("room:join", handelJoinRoom)
        return () => {
            socket.off("room;join", handelJoinRoom)
        }
    }, [socket, handelJoinRoom])
    return (
        <div>
            <h1>video_call</h1>
            <form
                className=""
                onSubmit={handelVideoCall}>
                <label htmlFor="">Email</label>
                <input
                    className="border"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Room</label>
                <input
                    className="border"
                    type="Room number"
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button className="bg-black text-white p-2">Join</button>
            </form>
        </div>
    );
};

export default Video_call;