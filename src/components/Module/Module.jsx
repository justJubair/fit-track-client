'use client';
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import Timer from "../Timer/Timer";

const Module = ({ module }) => {
    const router = useRouter();

    const defVideo = module.videos[0].vlink;
  

    const [currentVideo, setCurrentVideo] = useState(module.videos[0].vlink);
    const [currentVideoIndex, setVideoIndex] = useState(0);
    const [timerDuration, setTimerDuration] = useState(600);

    const { data: session } = useSession();
   

    const handleModule = async (vid, vidIndex) => {
        setCurrentVideo('')
        setCurrentVideo(vid.vlink)

     
        
        setVideoIndex(vidIndex)
    }

 

    const handleNext = () => {
        if (module.videos.length === currentVideoIndex) {
            setCurrentVideo(module.videos[0].vlink)
            router.push('/modules')
            return
        }
        setVideoIndex(currentVideoIndex + 1)
        setCurrentVideo(module.videos[currentVideoIndex].vlink);

        const watchDetails = {
            userEmail: 'arnab@gmail.com',
            vidId: module.videos[currentVideoIndex]?._id
        } 
        axios.patch('http://localhost:5000/api/v1/updatewatchhistory', watchDetails)
     

    }
    const userEmail = { email: 'arnab@gmail.com'}


  const [unlockedVideos, setUnlockedVideos] = useState([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  useEffect(() => {
      // Fetch user watch history from the backend
      axios.get(`http://localhost:5000/api/v1/singleuser?email=${userEmail.email}`)
          .then(res => {
              // Extract the video IDs from the watch history
              const watchedVideoIds = res.data.watchHistory.map(item => item.videoId);
              
              // Determine which videos are unlocked based on watch history
              const unlockVideos = module.videos.reduce((acc, vid, index) => {
                  if (watchedVideoIds.includes(vid._id)) {
                      acc.push(index); // Video is unlocked if its ID exists in watch history
                  }
                  return acc;
              }, []);
              setUnlockedVideos(unlockVideos);
              setTriggerUpdate(prevState => !prevState); // Trigger re-render
          })
          .catch(error => {
              console.error('Error fetching user watch history:', error);
          });
  }, [unlockedVideos]);

  useEffect(() => {
    // This effect is triggered whenever the triggerUpdate state changes
}, [triggerUpdate]);


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
        const timeValue = parseInt(form.num.value, 10); // Parse the input value as an integer
        if (!isNaN(timeValue)) { // Check if the parsed value is a valid number
            setTimerDuration(timeValue);
        }
    }

    const time = new Date();
    time.setSeconds(time.getSeconds() + timerDuration);


    return (
        <div className=" flex flex-col lg:flex-row gap-4 my-4">
            <div className="w-full">
                <iframe className="rounded-md" width="100%" height="500" src={currentVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="flex justify-between gap-4">
                    <button onClick={handlePrev} className="bg-[#252525] px-8 py-3 my-6 text-white w-full md:w-1/5 rounded-[30px] hover:bg-[#378ae5] transition-all">👈 Previous</button>
                    <button onClick={handleNext} className="bg-[#252525] px-8 py-3 my-6 text-white w-full md:w-1/5 rounded-[30px] hover:bg-[#378ae5] transition-all">Next 👉</button>
                </div>
                <div className="block mx-auto text-center border-black border-[1px] py-5 rounded-md bg-black">
                    <Timer expiryTimestamp={time} className='text-white' />
                </div>
                <div className="text-center my-24 flex flex-col">
                    <h1 className="text-3xl w-4/5 text-center mx-auto font-semibold">Please, share your feedback about this module. Your Feedback will help use to make better our service.</h1>
                    <textarea className="mx-auto my-8 border-black border-[1px] w-4/5 h-44 rounded-md p-4" placeholder="Write your feedback here..." />
                    <button className="bg-[#252525] px-8 py-3 my-4 mx-auto text-white w-full md:w-1/5 rounded-[30px] hover:bg-[#378ae5] transition-all">Submit 👉</button>
                </div>
            </div>
            <div className="w-full lg:w-[40%] bg-black p-4 rounded-md overflow-y-scroll h-[52vh]">
                <ul>
                    {
                        module.videos.map((vid, vidIndex) => <li
                            key={vid._id}
                            className={`text-xl bg-[#252525] text-white mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all ${unlockedVideos.includes(vidIndex) ? '' : 'opacity-50 pointer-events-none'}`}
                            onClick={() => { handleModule(vid, vidIndex) }}>{vid.title}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Module;