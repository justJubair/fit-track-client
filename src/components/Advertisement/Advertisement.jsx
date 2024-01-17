'use client'
import React from 'react';
import image1 from '../../../public/Fit-Track/corinne_profile-1@2x.png'
import image2 from '../../../public/Fit-Track/Home-01@2x.png'
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import './Advertisement.css'
const Advertisement = () => {
    return (
        <div className='px-4 lg:w-4/5 mx-auto'>
            <div className='flex '>
                {/* 1st */}
                <div className='flex-1 relative'>
                    <Image className='w-4/5 h-4/5 object-contain ' src={image2} alt='running-image' placeholder='blur' quality={100} />
                    <div className=' absolute left-2/4 bottom-12'>
                        <div className="card ">
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
                                    <Typography component='h1' className='text-3xl font-bold'>12:30</Typography>
                                    <Typography component='p' className='text-xs '>TIME</Typography>
                                </div>
                                <div className='border-b border-black'></div>
                                <div className='py-8'>
                                    <Typography component='h1' className='text-5xl font-bold'>12:30</Typography>
                                    <Typography component='p' className='text-base'>MILES</Typography>
                                </div>
                                <div className='border-b border-black'></div>
                                <div className='flex justify-center py-8'>
                                    <div className='border-r border-black flex-1'>
                                        <Typography className='text-2xl font-bold mb-2' component='h1'>10.64</Typography>
                                        <Typography component='p' className='text-xs'>CURRENT PACE</Typography>
                                    </div>
                                    <div className='flex-1 '>
                                    <Typography className='text-2xl font-bold mb-2' component='h1'>6.84</Typography>
                                        <Typography component='p' className='text-xs'>CURRENT PACE</Typography>
                                    </div>
                                </div>
                                <div className='flex items-center justify-evenly mt-10'>
                                    <CameraAltIcon />
                                    <PlayCircleIcon className='text-5xl ' />
                                    <SettingsIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className='flex-1 '>
                    <div className='space-y-5'>
                        <Typography component='h1' className='text-6xl font-bold' >Run your journey with us.</Typography>
                        <Typography component='p' className='text-xl' style={{
                            textAlign: "justify",
                            whiteSpace: "pre-line"
                        }}>
                            Whether you’re just starting out, or your shoes have already seen many miles, we’ll be by your side for every stride. All you have to do is get out the door, and we’ll take it from there.
                        </Typography>
                        <Button className='bg-black hover:bg-black text-white font-semibold' variant="outlined" size="large">
                            Start Running
                        </Button>
                    </div>
                    <div className='  bg-black rounded-lg px-8 flex flex-row-reverse items-center gap-4 my-10'>
                        <div className='space-y-4'>
                            <Typography sx={{ color: "white", letterSpacing: '10px' }}>COACH CORRINE</Typography>
                            <Typography sx={{ color: "white" }}>“Running isn’t always pretty, but its capability to change your life is incredible!”</Typography>
                            <div className='bg-white flex items-center p-5 rounded-lg transform hover:scale-105 transition-transform  '>
                                <div className='flex-1'>
                                    <div className='mb-4'>
                                        <Typography component="span" className='px-4 py-1 bg-slate-200 rounded-full text-xs font-bold ' > GUIDED WORKOUT</Typography>
                                    </div>
                                    <Typography component="p" className='  font-bold' > I Am A Runner</Typography>
                                    <Typography component="p" className=' ' > 30min . All Levels</Typography>
                                </div>
                                <div>
                                    <PlayCircleIcon className='text-6xl ' />
                                </div>
                            </div>
                        </div>
                        <Image className=' w-1/3' src={image1} alt='running-image' placeholder='blur' quality={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};
///////
///
export default Advertisement;