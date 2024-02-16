"use client"
import Comments from '@/components/Comments/Comments';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogDetailsPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blog, setBlog] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getBlog = async () => {
            const allBlogs = await fetch(`https://fit-track-server.vercel.app/api/v1/blog/${id}`);
            const result = await allBlogs.json();
            setBlog(result);
        };

        getBlog();
    }, [count, id]);
    return (
        <div >
            <div className="bg-black h-16"></div>
            <div className='px-4 md:w-4/5 mx-auto'>
                <div className=''>
                    <h1 className='text-6xl text-center my-4 italic font-bold'>{blog?.title}</h1>
                </div>
                <div className='flex justify-center my-4'>
                    <Image width={"1000"} height={"800"} src={blog?.image} alt="Card Image" className="w-auto h-auto rounded-2xl " />
                </div>
                <div className='my-10'>
                    <p className='md:text-xl' style={{
                        wordSpacing: "5px",
                        textAlign: "justify",
                        whiteSpace: "pre-line"
                    }}>{blog?.description}</p>
                </div>
                {/* comments section */}
                <div>
                    <Comments id={blog?._id} comments={blog?.blogComments} incrementCount={incrementCount} />
                </div>
                {/* comments section */}
            </div>

        </div>
    );
};

export default BlogDetailsPage