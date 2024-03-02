import { Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const MoreBlog = () => {
    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        const getAllBlogs = async () => {
            const allBlogs = await fetch("https://fit-track-server.vercel.app/api/v1/all-blogs");
            return allBlogs.json();
        };
        getAllBlogs().then(result => setChallenges(result));
    }, [])
    
    return (
        <div className='px-10  space-y-3 fixed top-16 bottom-16 z-20 '>
            <h1 className='text-2xl text-center my-4 italic font-bold '>More...</h1>
            {
                challenges.slice(0, 5).map((challenge, i) => (
                    <Link
                        href={`/blog/${challenge?._id}`}
                        key={i} className='flex bg-blue-100 rounded-xl gap-2 shadow-2xl space-y-4'>
                        <Image
                            priority={true}
                            src={challenge?.image}
                            height={100}
                            width={100}
                            alt='more blog img'
                            className=' rounded-tl-xl rounded-bl-xl h-auto w-auto' />
                        <Typography sx={{ fontWeight: 500, py:1 }}>
                            {challenge.title}
                        </Typography>
                    </Link>
                ))
            }
        </div>
    );
};

export default MoreBlog;