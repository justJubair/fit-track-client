"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from 'react';
import { VideocamTwoTone } from "@mui/icons-material";
import videoAnimation from "./Animation - 1709216520437.json"
import Lottie from "lottie-react";
const VideoCall = () => {
    const pathname = usePathname()
    console.log(pathname)
    const [room, setRoomId] = useState("")
    const router = useRouter()
    const handelVideoCall = useCallback(
        (e) => {
            e.preventDefault()
            router.push(`/video_call/${room}`);
        },
        [room, router]
    )

    return (
        <div>
            <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">

                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold my-8">Video calls and meetings <br /> for You</h1>
                    <p className="text-xl my-6"> Meet provides secure, easy-to-use video calls and meetings for You.your ultimate destination for achieving your health and wellness goals with a personalized touch.</p>
                    <div className="flex gap-6 py-5">
                        <h1 className=" bg-green-600 text-white py-3 px-6 text-xl font-bold rounded flex justify-center items-center gap-2"><VideocamTwoTone /> Room</h1>
                        <input
                            className="border-2 px-4 rounded w-96"
                            type="Room number"
                            required
                            placeholder="Enter Your Code & Id"
                            onChange={(e) => setRoomId(e.target.value)}
                        />

                        {
                            room === "" ?
                                <button className={` text-black p-2 opacity-50`}>Join</button>
                                :
                                <button onClick={handelVideoCall} className="bg-green-600 text-white py-2 px-6 text-lg font-bold rounded">Join</button>
                        }
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <Lottie animationData={videoAnimation} />;
                </div>
            </div>
        </div>
    );
};

export default VideoCall;