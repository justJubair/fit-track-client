import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useState, useRef, useEffect } from 'react';
const Audio = () => {


    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    useEffect(() => {
        if (isPlaying) {
            const intervalId = setInterval(() => {
                setCurrentTime(audioRef.current.currentTime);
            }, 100);
            return () => clearInterval(intervalId);
        }
    }, [isPlaying]);
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    
    return (

        <div
            onClick={togglePlayPause}
            className='bg-white flex items-center px-2 md:p-5 rounded-lg transform hover:scale-105 transition-transform cursor-pointer'>
            <div className='flex-1'>
                <div className='mb-4'>
                    <span component="span" className='px-4 py-1 bg-slate-100 rounded-full text-xs font-bold ' > GUIDED WORKOUT</span>
                </div>
                <p component="p" className='  font-bold' > I Am A Runner</p>
                <p component="p" className='flex md:hidden ' >  {formatTime(currentTime)}/14:22</p>
            </div>

            <div className='flex items-center'>
                <div className='mr-3 hidden md:flex '>
                    {formatTime(currentTime)}/14:22
                </div>
                <div>
                    {
                        isPlaying ?
                            <PauseCircleIcon fontSize={'large'} />
                            :
                            <PlayCircleIcon fontSize={'large'} />
                    }
                </div>
            </div>

            <audio
                ref={audioRef}
                src="/Audio/Running.mp3"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            ></audio>
        </div>

    );
};

export default Audio;