
"use client"
import BlogCard from "./BlogCard";


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
            <div className='bg-black pt-20 '>
                {/* popular blogs */}
                <div className='grid grid-cols-3 gap-4 bg-white pt-10 px-10'>
                    <div className='  col-span-2'>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/-SeN8HdroDE?si=3lXXBidFA114r9Jy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className=' flex-grow'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7EewP9k_7w?si=aWESJ1Q1JIFh6FNp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className=' flex-grow'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IrWwEr5n4eE?si=GPETfGkOp7Ll1xx1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
            {/* recent blogs */}
            <div className='px-10'>
                <h3 className=' font-semibold text-3xl p-6'>Recent Post</h3>

                {/* challengecard will be replaced with blog cards */}
                {/* TODO: Design Blog Cards */}

                <div className='grid grid-cols-3 gap-4'>
                    {/* mapping all services one by one */}
                    {challenges.map((challenge) => (
                        <BlogCard key={challenge} challenge={challenge} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Blog;