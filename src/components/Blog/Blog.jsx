"use client"
import { Avatar, Button } from "@mui/material";
import BlogCard from "./BlogCard";
import { ToastContainer, toast } from "react-toastify";
import './Blog.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const Blog = () => {

    //states
    const [challenges, setChallenges] = useState()

    //states
    const { data: session } = useSession();
    useEffect(() => {
        const getAllBlogs = async () => {
            const allBlogs = await fetch("http://localhost:5000/api/v1/all-blogs");
            return allBlogs.json();
        };
        getAllBlogs().then(result => setChallenges(result));
    }, [])
    // console.log(challenges)

    const handelBlog = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const imageFile = { image: form.photo?.files[0] }
        const currentDate = new Date();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const time = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
        const dbResponse = await axios.post("https://api.imgbb.com/1/upload?key=ae66490f64c3dbadf60adcdd1d5d93f7", imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        //Final Blog
        const blog = {
            title,
            description,
            image: dbResponse?.data?.data?.url,
            time,
            userName: session.user?.name,
            userImageURL: session.user?.image,
            likes: [],
            disLikes: [],
        }
        //Final Blog
        const res = await axios.post("http://localhost:5000/api/v1/blogs", blog)
        if (res.data?._id) {
            toast.success('Blog Uploaded!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            form.reset()
        }
    }
    return (
        <div className='mb-[120px]' >
            <div className="bg-black h-16"></div>
            <div className='mt-10 px-2'>
                <form
                    onSubmit={handelBlog}
                    className="lg:w-1/2 mx-auto px-2 py-8 lg:p-10 bg-black rounded-lg text-white" >
                    <h1 className="text-xl uppercase text-center mb-4 font-bold">Upload Your Blog</h1>
                    <div className=" flex items-center gap-4">
                        <Avatar alt={session?.user?.name} src={session?.user?.image} sx={{ mb: "20px" }} />

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="title"
                                id="floating_email"
                                className="block py-2.5 text-white px-2 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Title
                            </label>
                        </div>
                    </div>
                    <textarea name="description" id="" cols="100%" rows="8" placeholder="Description" className="w-full mt-2 p-2 text-black rounded-lg " required ></textarea>
                    {/* image input file */}
                    <div className="flex gap-10 mt-5">
                        <div className="flex-1 ">
                            <input type="file" name="photo" className="border bg-gray-600 rounded-lg  w-full cursor-pointer" required />
                        </div>
                        <div className="flex-1">
                            <Button type="submit" variant="outlined" fullWidth size="small" sx={{ fontWeight: "bold" }}>Post</Button>
                        </div>
                    </div>
                </form>
            </div>
            {/* recent blogs */}
            <div className='px-2 lg:px-10'>
                <h3 className=' font-semibold text-3xl p-6'>Recent Post</h3>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                    {/* mapping all services one by one */}
                    {challenges?.map((challenge, i) => (
                        <BlogCard key={i} challenge={challenge} />
                    ))}
                </div>
            </div>
            <ToastContainer />

        </div>

    );
};

export default Blog;