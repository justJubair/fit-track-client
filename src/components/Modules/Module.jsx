'use client';
import { Source } from "@mui/icons-material";
import { useState } from "react";

const Module = ({ module }) => {
    console.log(module)
    const [currentVideo, setCurrentVideo] = useState('');

    const handleModule=(link)=>{
           setCurrentVideo(link)

    }
    return (
        <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
            <div className="flex-1">
                <iframe width="100%" height="400" src={currentVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <ul>
                    {
                        module.videos.map(vid => <li 
                            className="text-xl bg-[#dedede] mb-5 p-5 rounded-md cursor-pointer hover:bg-[red]"
                            onClick={() => {handleModule(vid.vlink)}}>{vid.title}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Module;