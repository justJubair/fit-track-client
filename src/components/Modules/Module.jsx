'use client';
import { useState } from "react";

const Module = ({ module }) => {
    console.log(module.videos[0].vlink)
  const defVideo = module.videos[0].vlink;
  console.log(defVideo)
    const [currentVideo, setCurrentVideo] = useState(module.videos[0].vlink);

    const handleModule=(vid)=>{
           setCurrentVideo('')
           setCurrentVideo(vid.vlink)
           const watchDetails = {
            
           }
      
    }
    return (
        <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
            <div className="flex-1">
                <iframe width="100%" height="400" src={currentVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="flex gap-4">
            <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full md:w-1/2 rounded-md hover:bg-[#378ae5] transition-all">Previous</button>
            <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full md:w-1/2 rounded-md hover:bg-[#378ae5] transition-all">Next</button>
            </div>
                </div>
            <div>
                <ul>
                    {
                        module.videos.map(vid => <li 
                            className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[#378ae5] hover:text-[#fff] transition-all"
                            onClick={() => {handleModule(vid)}}>{vid.title}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Module;