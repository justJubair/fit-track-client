import Image from "next/image";
import Link from "next/link";

// icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import { useSession } from "next-auth/react";
import UserInfoDialog from "@/components/CustomizeDiet/FormDialog/UserInfoDialog";
import { useState } from "react";

const DashboardUser = ({ services, challenges,bookmarkedBlogs }) => {

  // customize diet modal state
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const {data:session} = useSession()

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
   
    setScroll(scrollType);
  };
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-10 md:gap-4 mt-5 px-4 lg:px-2 mb-8">
        {/* content */}
        <div className="md:col-span-9">
          {/* title */}
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            Populer Activites
          </h1>

          {/* populer activies */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2  gap-4">
            {services?.slice(0, 5)?.map((service, index) => (
              <Link
                href={`/service/${service._id}`}
                key={service?._id}
                className={`${
                  index === 0
                    ? ""
                    : index === 1
                    ? "md:col-span-2 md:row-span-2"
                    : index === 2
                    ? ""
                    : index === 3
                    ? "class4"
                    : index === 4
                    ? ""
                    : ""
                } relative hover:cursor-pointer`}
              >
                <div>
                  <Image
                    className="rounded-lg w-full object-cover"
                    src={service?.thumbnail}
                    width={500}
                    height={500}
                    alt={service?.heading}
                  />
                  {/* overlay */}
                  <div className="absolute flex flex-col items-end justify-end top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-blue-700/50 border-10 transition-all duration-600 ease-linear rounded-lg hover:bg-blue-700/60"></div>
                  <div>
                    <h1 className="absolute bottom-2 right-2 lg:right-2 md:left-1 text-lg md:text-sm lg:text-lg font-bold text-white md:hidden lg:block">
                      {service?.heading?.slice(0, 15)}...
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        

         <div className="flex flex-col md:flex-row items-start justify-between gap-8 ">
           {/* weekly Challenges */}
           <div className="space-y-4 w-full lg:w-[1000px]">
              {/* title */}
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-8">
            Weekly Challenges
          </h2>
            {challenges?.slice(0, 4)?.map((challenge, index) => (
              <div
                key={challenge?._id}
                className={`flex items-center w-full justify-between p-3 rounded-xl ${
                  index === 0
                    ? "bg-gradient-to-l from-indigo-500  to-blue-200 bg-opacity-50"
                    : index === 1
                    ? "bg-gradient-to-l from-yellow-200  to-green-300 bg-opacity-75"
                    : index === 2
                    ? "bg-gradient-to-l from-teal-300 to-teal-100 bg-opacity-70"
                    : index === 3
                    ? "bg-gradient-to-l from-pink-300 to-yellow-200 bg-opacity-80"
                    : ""
                }`}
              >
                {/* date and meeting info*/}
                <div className="flex items-center gap-4">
                  <div className="text-center border-r-4 border-gray-700 pr-4">
                    <p className="font-bold text-2xl text-gray-700 ">
                      {index + 2}
                    </p>
                    <p className="font-semibold text-gray-700">
                      {index === 0
                        ? "MON"
                        : index === 1
                        ? "WED"
                        : index === 2
                        ? "FRI"
                        : index === 3
                        ? "SAT"
                        : ""}
                    </p>
                  </div>

                  {/* meeting info */}
                  <div>
                    <p className="text-lg md:text-xl font-bold text-gray-700">
                      {challenge?.challengeName}
                    </p>
                    {/* client images */}
                    <div className="flex items-center -space-x-3">
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        alt="user01"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                        alt="user02"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                        alt="user03"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-9 h-9"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                        alt="user04"
                      />
                    </div>
                  </div>
                </div>

                <Link
                  href="challenges"
                  className="border-2 border-gray-500 bg-white px-4 py-2 rounded-2xl font-bold shadow-xl duration-200 hover:scale-105"
                >
                  Join
                </Link>
              </div>
            ))}
          </div>

       
          {/* personal bests */}
          <div className="w-full">
                    {/* title */}
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-8">
            Get Your Customize Diet Plan
          </h2>
            {/* run */}
            <div  className="flex items-center w-full gap-4 justify-between p-5 bg-purple-400 bg-opacity-60 rounded-xl">
            <button className="font-bold bg-purple-500 text-center rounded-lg px-3 py-1 text-white duration-200 hover:scale-105" onClick={handleClickOpen("paper")}>Diet Form</button>
            <UserInfoDialog open={open} setOpen={setOpen} scroll={scroll} setScroll={setOpen}/>
              <Image
                width={250}
                height={150}
                className="w-44"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                alt="RunLogoBanner"
              />
              
            </div>

            {/* cycling and skating */}
            <div className="flex flex-col md:flex-row items-center gap-3 mt-3">
              {/* cycling */}
              <div className="flex flex-col gap-4 p-5 w-full bg-orange-300 bg-opacity-60 rounded-xl">
              <Link href="/diettable" className="font-bold bg-orange-400 text-center rounded-lg p-1 text-white duration-200 hover:scale-105">Diet Chart</Link>
                  <Image width={200} height={100}
                  className="w-24"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                    alt="Cycling logo"
                  />
            </div>

            {/* skating */}
            <div className="flex flex-col gap-4 p-5 w-full bg-green-300 bg-opacity-60 rounded-xl">
            <p className="font-bold">Longest Roller-Skating: 2 hours</p>
                  <Image width={200} height={100}
                  className="w-24"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c"
                    alt="Roller skating logo"
                  />
            </div>
            </div>
          </div>

         </div>

        </div>

        {/* sidebar: user information */}
        <div className="md:col-span-3">

          {/* user name and message icon */}
          <div className="flex items-center justify-between">
            {/* icons */}
            <div className="flex items-center gap-3">
              <NotificationsIcon/>
              <MessageIcon/>
            </div>

            {/* user name and image */}
            <div className="flex items-center gap-2">
              <p className="md:hidden lg:block font-medium">{session?.user?.name}</p>
              {session?.user?.image &&  <Image className="rounded-full w-10 h-10" src={session?.user?.image} width={100} height={100} alt="user profile image"/>}
             
            </div>
          </div>

          {/* bookmarked blogs */}
          <div>
              <h5 className="font-bold text-lg text-center mt-4 mb-2">Bookmarked blogs</h5>
              <div>
                {
                  bookmarkedBlogs?.map(bookmarkBlog=> <div key={bookmarkBlog?._id}>
                   <Image className="w-full object-cover rounded-xl" src={bookmarkBlog?.image} width={250} height={200} alt={bookmarkBlog?.title}/>
                   <p className="font-medium mt-2">{bookmarkBlog?.title}</p>
                  </div>)
                }
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardUser;
