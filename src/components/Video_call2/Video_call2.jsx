"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import imagePng from "./—Pngtree—cartoon hand drawn online education_5341181.png"
import { VideocamOffTwoTone, VideocamTwoTone } from "@mui/icons-material";
const VideoCall2 = () => {
    const [room, setRoomId] = useState("")
    console.log(room)
    const router = useRouter()
    const handelVideoCall = (e) => {
        e.preventDefault()
        router.push(`/video_call/${room}`);

    }
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
                <div className="md:w-1/2">
                    <Image
                        // className="w-full h-full"
                        width={500}
                        height={500}
                        src="https://www.freepik.com/free-vector/windows-doors-services-abstract-concept-vector-illustration-replacement-installation-window-door-maintenance-repair-contractor-broken-glass-fly-screen-patio-abstract-metaphor_24070918.htm#fromView=search&page=1&position=29&uuid=20286425-cc28-45bb-b7d5-aa88499e5df0"
                        // src={imagePng}
                        alt="trainer image"
                    />
                    {/* <a href="https://www.flaticon.com/free-icons/video-call" title="video call icons">Video call icons created by Hilmy Abiyyu A. - Flaticon</a> */}
                </div>
            </div>
        </div>
    );
};

export default VideoCall2;