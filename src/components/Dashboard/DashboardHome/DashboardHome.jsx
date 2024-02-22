"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getSingleUser } from "@/api/getSingleUser";
import getAllBlogs from "@/api/getAllBlogs";
import DashboardTrainer from "../DashboardTrainer/DashboardTrainer";
import DashboardUser from "../DashboardUser/DashboardUser";

const DashboardHome = ({services, challenges}) => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  const { data: session } = useSession();
 

  useEffect(() => {
    const getBookmarkedBlog = async () => {
      const user = await getSingleUser(session?.user?.email);
      const bookmarkedBlogIds = user?.saved_blogs;
      const allBlogs = await getAllBlogs();

      const bookmarkeds = allBlogs.filter((blog) =>
        bookmarkedBlogIds?.includes(blog?._id)
      );
      setBookmarkedBlogs(bookmarkeds);
    };
    getBookmarkedBlog();
  }, [session?.user?.email]);

  return (
    <>
      {
        session?.user?.email === "jubair.ahmed2838@gmail.com" ? <DashboardTrainer challenges={challenges}/> : <DashboardUser services={services} challenges={challenges} bookmarkedBlogs={bookmarkedBlogs}/>
      }

      
    </>
  );
};
export default DashboardHome;
