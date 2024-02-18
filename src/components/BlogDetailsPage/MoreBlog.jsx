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
    // console.log(challenges)
    return (
        <div className='px-10  space-y-3 fixed top-16 z-20 '>
            <h1 className='text-2xl text-center my-4 italic font-bold '>More...</h1>
            {
                challenges.slice(0, 5).map((challenge, i) => (
                    <Link
                        href={`/blog/${challenge?._id}`}
                        key={i} className='flex bg-blue-100 rounded-xl gap-2 '>
                        <Image src={challenge?.image} height={200} width={200} alt='more blog img' className='rounded-xl' />
                        <Typography sx={{ fontWeight: 500, }}>
                            {challenge.title}
                        </Typography>
                    </Link>
                ))
            }
        </div>
    );
};

export default MoreBlog;