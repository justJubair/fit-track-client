'use client'
import React from 'react';
import image1 from '../../../public/Fit-Track/corinne_profile-1@2x.png'
import image2 from '../../../public/Fit-Track/Home-01@2x.png'
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
const Advertisement = () => {
    return (
        <div className='px-4 lg:w-4/5 mx-auto'>
            <div className='flex '>
                {/* 1st */}
                <div className='flex-1'>
                    <Image className='w-4/5 h-4/5 object-contain' src={image2} alt='running-image' placeholder='blur' quality={100} />
                </div>
                {/* 2nd */}
                <div className='flex-1 '>
                    <div className='space-y-5'>
                        <Typography component='h1' className='text-6xl font-bold text-red-500' >Run your journey with us.</Typography>
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
                    <div className='  bg-black rounded-lg px-10 flex flex-row-reverse items-center gap-4 my-10'>
                        <div className='space-y-4'>
                            <Typography sx={{ color: "white", letterSpacing: '10px' }}>COACH CORRINE</Typography>
                            <Typography sx={{ color: "white" }}>“Running isn’t always pretty, but its capability to change your life is incredible!”</Typography>
                            <div>

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