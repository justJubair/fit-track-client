"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getSingleUser } from "@/api/getSingleUser";
import getAllBlogs from "@/api/getAllBlogs";
import DashboardTrainer from "../DashboardTrainer/DashboardTrainer";
import DashboardUser from "../DashboardUser/DashboardUser";

const DashboardHome = ({services, challenges}) => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [currentUser, setCurrentUser] = useState({})

  const { data: session } = useSession();


  useEffect(() => {

    // get bookmarked blogs
    const getBookmarkedBlog = async () => {
      const user = await getSingleUser(session?.user?.email);
      setCurrentUser(user)
      const bookmarkedBlogIds = user?.saved_blogs;
      const allBlogs = await getAllBlogs();

      const bookmarkeds = allBlogs.filter((blog) =>
        bookmarkedBlogIds?.includes(blog?._id)
      );
      setBookmarkedBlogs(bookmarkeds);
    };

    getBookmarkedBlog();
  }, [session?.user?.email, session]);

  if (!session) {
   return signIn()
  }
  return (
    <>
      {
        currentUser?.role === "trainer" ? <DashboardTrainer currentUser={currentUser} challenges={challenges}/> : <DashboardUser services={services} challenges={challenges} bookmarkedBlogs={bookmarkedBlogs}/>
      }

      
    </>
  );
};
export default DashboardHome;
