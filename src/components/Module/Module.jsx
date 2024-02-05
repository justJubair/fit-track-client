'use client';
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import Timer from "../Timer/Timer";

const Module = ({ module }) => {
    const router = useRouter();

    const defVideo = module.videos[0].vlink;
    // console.log(defVideo)

    const [currentVideo, setCurrentVideo] = useState(module.videos[0].vlink);
    const [currentVideoIndex, setVideoIndex] = useState(0);
    const [timerValue, setTimerValue] = useState(1);
    const { data: session } = useSession();
    // console.log(session)

    const handleModule = async (vid, vidIndex) => {
        setCurrentVideo('')
        setCurrentVideo(vid.vlink)

        // console.log(vid)

        const watchDetails = {
            userEmail: session?.user.email,
            vidId: vid?._id
        }
        console.log(watchDetails)

        setVideoIndex(vidIndex)
    }

    // console.log(currentVideoIndex)

    const handleNext = () => {
        if (module.videos.length === currentVideoIndex) {
            setCurrentVideo(module.videos[0].vlink)
            router.push('/modules')
            return
        }
        setVideoIndex(currentVideoIndex + 1)
        setCurrentVideo(module.videos[currentVideoIndex].vlink);

    }
    const handlePrev = () => {
        if (currentVideoIndex === 0) {
            setCurrentVideo(module.videos[0].vlink)
            return
        }
        setVideoIndex(currentVideoIndex - 1)
        setCurrentVideo(module.videos[currentVideoIndex].vlink);

    }

    const handleTimer = (e) => {
        e.preventDefault();
        const form = e.target;
        const timeValue = form.num.value;
        setTimerValue(timeValue * 60)
        console.log(timerValue)
    }


    const time = new Date();
    time.setSeconds(time.getSeconds() + timerValue); // 10 minutes timer

 
    return (
        <div className=" flex flex-col lg:flex-row gap-4 my-4">
            <div className="w-full">
                <iframe className="rounded-md" width="100%" height="400" src={currentVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="flex justify-between gap-4">
                    <button onClick={handlePrev} className="bg-[#252525] px-8 py-3 my-6 text-white w-full md:w-1/5 rounded-[30px] hover:bg-[#378ae5] transition-all">👈 Previous</button>
                    <button onClick={handleNext} className="bg-[#252525] px-8 py-3 my-6 text-white w-full md:w-1/5 rounded-[30px] hover:bg-[#378ae5] transition-all">Next 👉</button>
                </div>
                <div className="block mx-auto text-center">
                    <Timer expiryTimestamp={time} />
                    <form onSubmit={handleTimer} className='my-4'>
                        <h2>Set your timer.</h2>
                        <input className="px-8 py-2 border-black border-[1px]" type='number' name='num' required />
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
            <div className="w-full lg:w-[40%] bg-black p-4 rounded-md overflow-y-scroll h-[50vh]">
                <ul>
                    {
                        module.videos.map((vid, vidIndex) => <li
                            key={vid._id}
                            className="text-xl bg-[#252525] text-white mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all"
                            onClick={() => { handleModule(vid, vidIndex) }}>{vid.title}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Module;