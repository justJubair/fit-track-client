
"use client"
import { Avatar, Button, TextField } from "@mui/material";
import BlogCard from "./BlogCard";
import './Blog.css'


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
            <div className='mt-10 px-4'>

                <div className="lg:w-1/2 mx-auto px-2 py-8 lg:p-10 bg-gray-100 rounded-lg" >
                    <h1 className="text-xl uppercase text-center mb-4 font-bold">Upload Your Blog</h1>
                    <div className=" flex items-center gap-4">
                        <Avatar alt="Bravis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AAr5br4BWpaw7bNRDCEzfKzMcO3PzzTqOw&usqp=CAU" />
                        <TextField id="filled-basic" label="Title" variant="filled" fullWidth />
                    </div>
                    <textarea name="" id="" cols="100%" rows="8" placeholder="Description" className="w-full mt-8 p-2 " ></textarea>
                    {/* image input file */}

                    
                        <div className="flex items-center gap-2  border w-28 mx-auto rounded-lg p-2 border-black mt-6">
                            <p>IMAGE</p>
                            <div class="input-div">
                                <input type="file" class="input" name="file" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                            </div>
                        </div>
                        <div className="">
                            <Button variant="outlined" fullWidth>Post</Button>
                        </div>
                 

                </div>
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