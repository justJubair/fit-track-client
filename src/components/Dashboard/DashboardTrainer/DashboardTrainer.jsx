import Image from "next/image";
import Link from "next/link";

// icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { useSession } from "next-auth/react";

// icons
import GroupIcon from "@mui/icons-material/Group";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NotificationDropdown from "./NotificationDropdown";

const DashboardTrainer = ({ challenges, currentUser }) => {
  const { data: session } = useSession();
 
  // filter friend list on the basis of seen and unseen property
  const unseenNotifications = currentUser?.friendList?.filter(friend=> friend?.seenStatus === false)

  // friend list
  const acceptedFriends = currentUser?.friendList?.filter(friend=> friend?.requestStatus)
  console.log(acceptedFriends)
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-10 md:gap-4 mt-5 px-4 lg:px-2 mb-8">
        {/* content */}
        <div className="md:col-span-9">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 ">
            {/* weekly Challenges */}
            <div className="space-y-4 w-full lg:w-[1000px]">
              {/* title */}
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Schedule Meetings
              </h2>
              {challenges?.slice(0, 4)?.map((challenge, index) => (
                <div
                  key={challenge?._id}
                  className={`flex items-center w-full justify-between p-3 rounded-xl ${
                    index === 0
                      ? "bg-gradient-to-l from-gray-400  to-blue-200 bg-opacity-50"
                      : index === 1
                      ? "bg-gradient-to-l from-blue-200  to-green-300 bg-opacity-75"
                      : index === 2
                      ? "bg-gradient-to-l from-gray-400  to-blue-200 bg-opacity-50"
                      : index === 3
                      ? "bg-gradient-to-l from-blue-200  to-green-300 bg-opacity-75"
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
                Current Stats
              </h2>
              {/* run */}
              <div className="flex items-center w-full gap-4 justify-between p-5 bg-purple-400 bg-opacity-60 rounded-xl">
                <p className=" font-bold">Total clients: 41</p>
               
                <GroupIcon fontSize="large" />
              </div>

              {/* cycling and skating */}
              <div className="flex flex-col md:flex-row items-center gap-3 mt-3">
                {/* cycling */}
                <div className="flex flex-col gap-4 p-5 w-full bg-orange-300 bg-opacity-60 rounded-xl">
                  <p className="font-bold">Total Revenue: $225</p>
                 
                  <MonetizationOnIcon fontSize="large" />
                </div>

                {/* skating */}
                <div className="flex flex-col gap-4 p-5 w-full bg-green-300 bg-opacity-60 rounded-xl">
                  <p className="font-bold">Total session: 2 hours</p>
                 
                  <VideoChatIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>

          {/* populer activies */}
          <div className="mt-8">
            {/* title */}
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              Active Challenges
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2  gap-4">
              {challenges?.slice(0, 5)?.map((challenge, index) => (
                <Link
                  href="/challenges"
                  key={challenge?._id}
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
                      src={challenge?.imageLink}
                      width={500}
                      height={500}
                      alt={challenge?.challengeName}
                    />
                    {/* overlay */}
                    <div className="absolute flex flex-col items-end justify-end top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-blue-700/50 border-10 transition-all duration-600 ease-linear rounded-lg hover:bg-blue-700/60"></div>
                    <div>
                      <h1 className="absolute bottom-2 right-2 lg:right-2 md:left-2 text-lg md:text-sm lg:text-lg font-bold text-white md:hidden lg:block">
                        {challenge?.challengeName?.slice(0, 15)}...
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar: user information */}
        <div className="md:col-span-3">
          {/* user name and message icon */}
          <div className="flex items-center justify-between">
            {/* icons */}
            <div className="flex items-center gap-3">
              {/* <NotificationsIcon /> */}
             <div className="relative">
            <NotificationDropdown currentUser={currentUser} />
            {unseenNotifications?.length>0 &&  <span className="absolute -top-1 right-1 bg-red-600 text-white font-bold rounded-full p-1 text-xs">{unseenNotifications?.length}</span>}
            
             </div>
              <MessageIcon sx={{fontSize: "28px"}}/>
            </div>

            {/* user name and image */}
            <div className="flex items-center gap-2">
              <p className="md:hidden lg:block font-medium">
                {session?.user?.email}
              </p>
              {session?.user?.image && (
                <Image
                  className="rounded-full w-10 h-10"
                  src={session?.user?.image}
                  width={100}
                  height={100}
                  alt="user profile image"
                />
              )}
            </div>
          </div>

          {/* bookmarked blogs */}
          <div>
            <h5 className="font-bold text-lg text-center mt-4 mb-4 border-b-2">
                Your Clients
            </h5>
            {/* client list */}
            <div className="flex flex-col items-start px-4 justify-end gap-4">
               {
                acceptedFriends?.map(friend=>  <div key={friend?._id} className="flex items-center gap-2">
              {
                friend?.userImage &&   <Image className="rounded-full object-cover w-12 h-12" src={friend?.userImage} width={40} height={40} alt={friend?.userName}/>
              }
                {/* client details */}
                <div>
                  <p className="font-medium">{friend?.userName}</p>
                </div>
              </div>)
               }
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardTrainer;
