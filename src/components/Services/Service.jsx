'use client';
import Link from 'next/link';
import HoverVideoPlayer from 'react-hover-video-player';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Service = ({ serv }) => {

    // Initialization of AOS
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className='rounded-md mx-4 lg:mx-0' data-aos="zoom-in-up">
            <Link href='#' className=' rounded-md'>
            {/* HoverVideoPlayer for video hover on play */}
                <HoverVideoPlayer
                style={{ borderRadius:'10px' }}
                    videoSrc={require('../../assets/bannerVideo.mp4')}
                    pausedOverlay={
                        <img
                            src={serv.thumbnail}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius:'10px'
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
            </Link>
        </div>
    );
};

export default Service;