'use client'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AOS from "aos";
import Image from 'next/image';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import image2 from '../../../public/Fit-Track/Home-01@2x.png';
import image1 from '../../../public/Fit-Track/corinne_profile-1@2x.png';
import './Advertisement.css';
import Audio from './Audio';

const Advertisement = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='px-4 lg:w-4/5 mx-auto '>
            <div className='flex flex-col gap-28 md:gap-14 lg:gap-0 lg:flex-row'>
                {/* 1st */}
                <div className='flex-1 relative'>
                    <Image data-aos="zoom-in-up" className='w-4/5 lg:h-4/5 object-contain h-auto' src={image2} alt='running-image' placeholder='blur' quality={100} />
                    <div data-aos="zoom-in-up" className=' absolute   lg:right-20 lg:bottom-12 advertise'>
                        <div data-aos="fade-up"
                            data-aos-duration="2000" className="card ">
                            <div className="tools">
                                <div className="circle">
                                    <span className="red box"></span>
                                </div>
                                <div className="circle">
                                    <span className="yellow box"></span>
                                </div>
                                <div className="circle">
                                    <span className="green box"></span>
                                </div>
                            </div>
                            <div className="card__content text-center">
                                <div className='py-2'>
                                    <p className='text-3xl font-bold'> <CountUp enableScrollSpy={true} end={10} />:<CountUp enableScrollSpy={true} end={45} /></p>
                                    <p className='text-xs '>TIME</p>
                                </div>
                                <div className='border-b border-black'></div>
                                <div className='py-8'>
                                    <p className='text-5xl font-bold'><CountUp enableScrollSpy={true} end={12} />:<CountUp enableScrollSpy={true} end={50} /></p>
                                    <p className='text-base'>MILES</p>
                                </div>
                                <div className='border-b border-black'></div>
                                <div className='flex justify-center py-8'>
                                    <div className='border-r border-black flex-1'>
                                        <p className='text-2xl font-bold mb-2' ><CountUp enableScrollSpy={true} end={44} />:<CountUp enableScrollSpy={true} end={0} /></p>
                                        <p className='text-xs'>CURRENT PACE</p>
                                    </div>
                                    <div className='flex-1 '>
                                        <p className='text-2xl font-bold mb-2' ><CountUp enableScrollSpy={true} end={6} />:<CountUp enableScrollSpy={true} end={84} /></p>
                                        <p className='text-xs'>AVG PACE</p>
                                    </div>
                                </div>
                                <div className=' hidden md:flex items-center justify-evenly mt-10 '>
                                    <CameraAltIcon />
                                    <PlayCircleIcon fontSize={'large'} />
                                    <SettingsIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div data-aos="zoom-in-up" className='flex-1 '>
                    <div className='space-y-5'>
                        <p component='h1' className='text-6xl font-bold' >Run your journey with us.</p>
                        <p component='p' className='text-xl' style={{
                            textAlign: "justify",
                            whiteSpace: "pre-line"
                        }}>
                            Whether you’re just starting out, or your shoes have already seen many miles, we’ll be by your side for every stride. All you have to do is get out the door, and we’ll take it from there.
                        </p>
                        <Button className='bg-black hover:bg-black text-white font-semibold' variant="outlined" size="large">
                            Start Running
                        </Button>
                    </div>
                    <div className='  bg-black rounded-lg md:px-8 flex flex-row-reverse items-center gap-4 my-10'>
                        <div className='space-y-4 p-2'>
                            <p className='text-white' style={{ letterSpacing: "8px" }} >COACH CORRINE</p>
                            <p className='text-white'>“Running isn’t always pretty, but its capability to change your life is incredible!”</p>
                            {/* Audio */}
                            <Audio />
                            {/* Audio */}
                        </div>
                        <Image className=' w-1/3 h-auto' src={image1} alt='running-image' placeholder='blur' quality={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};
///////
////
export default Advertisement;