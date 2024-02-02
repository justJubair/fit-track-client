'use client';
import { useSession } from "next-auth/react";
import { useState } from "react";

const Module = ({ module }) => {

    const defVideo = module.videos[0].vlink;
    // console.log(defVideo)

    const [currentVideo, setCurrentVideo] = useState(module.videos[0].vlink);
    const {data: session}= useSession();
    console.log(session)
    const handleModule = (vid) => {
        setCurrentVideo('')
        setCurrentVideo(vid.vlink)
        console.log(vid)
        const watchDetails={
            userEmail: session?.user.email,
            vidId: vid?._id
        }
        // console.log(watchDetails)
    }
    return (
        <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
            <div className="flex-1">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/ehXOS9mMrcU?si=gFTuheE5RLHZ04JC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="flex gap-4">
                    <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full md:w-1/2 rounded-md hover:bg-[#378ae5] transition-all">Previous</button>
                    <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full md:w-1/2 rounded-md hover:bg-[#378ae5] transition-all">Next</button>
                </div>
            </div>
            <div>
                {/* video sidebar title */}
                <ul>
                    {/* {
                        module.videos.map(vid => <li
                            key={vid._id}
                            className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all"
                            onClick={() => { handleModule(vid) }}>{vid.title}</li>)
                    } */}

                    {/* temporary for development */}
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Power Up: Full Body Blast</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Sweat & Shred: Intense Cardio Circuit</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Strength Surge: Total Muscle Transformation</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Core Crusher: Abs on Fire</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">HIIT Havoc: High-Intensity Interval Training</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Flex and Flow: Yoga Fusion for Strength</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Kickbox Cardio: Martial Arts Inspired Workout</li>
                    <li  className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all">Endurance Evolution: Marathon Training Session</li>
                </ul>
            </div>
        </div>
    );
};

export default Module;