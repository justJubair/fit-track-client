"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const VideoCall2 = () => {
    const [room, setRoomId] = useState()
    const router = useRouter()
    const handelVideoCall = (e) => {
        e.preventDefault()
        router.push(`/video_call/${room}`);

    }
    return (
        <div>
            <div>
                <h1>video_call</h1>

                {/* <label htmlFor="">Email</label>
                    <input
                        className="border"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    /> */}
                <label htmlFor="">Room</label>
                <input
                    className="border"
                    type="Room number"
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <button onClick={handelVideoCall} className="bg-black text-white p-2 ">Join</button>

            </div>
        </div>
    );
};

export default VideoCall2;