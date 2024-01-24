"use client"
import { Avatar, Button } from "@mui/material";
import BlogCard from "./BlogCard";

import './Blog.css';


const Blog = () => {

    const challenges = [
        {
            name: "Object 1",
            imageURL: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "Alice",
        },
        {
            name: "Object 2",
            imageURL: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "Bob",
        },
        {
            name: "Object 3",
            imageURL: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "Charlie",
        },
        {
            name: "Object 4",
            imageURL: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "David",
        },
        {
            name: "Object 5",
            imageURL: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "Eve",
        },
        {
            name: "Object 6",
            imageURL: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdBy: "Frank",
        },
    ];

    return (
        <div className='mb-[120px]' >
            <div className="bg-black h-16"></div>
            <div className='mt-10 px-4'>
                <form className="lg:w-1/2 mx-auto px-2 py-8 lg:p-10 bg-black rounded-lg text-white" >
                    <h1 className="text-xl uppercase text-center mb-4 font-bold">Upload Your Blog</h1>
                    <div className=" flex items-center gap-4">
                        <Avatar alt="Bravis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AAr5br4BWpaw7bNRDCEzfKzMcO3PzzTqOw&usqp=CAU" sx={{mb:"20px"}} />
                        {/* <TextField iid="outlined-basic" label="Outlined" variant="outlined" fullWidth  sx={{color:"white"}} /> */}
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
                            <input type="file" name="photo" className="border bg-blue-600 rounded-lg  w-full cursor-pointer" required />
                        </div>
                        <div className="flex-1">
                            <Button type="submit" variant="outlined" fullWidth size="small" sx={{ fontWeight: "bold"}}>Post</Button>
                        </div>
                    </div>
                </form>
            </div>
            {/* recent blogs */}
            <div className='lg:px-10'>
                <h3 className=' font-semibold text-3xl p-6'>Recent Post</h3>

                {/* challengecard will be replaced with blog cards */}
                {/* TODO: Design Blog Cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                    {/* mapping all services one by one */}
                    {challenges.map((challenge, i) => (
                        <BlogCard key={i} challenge={challenge} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Blog;