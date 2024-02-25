"use client";

import Image from "next/image";


// icons
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Slider, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const ManageProgress = () => {
  const {data:session} = useSession()

  return (
    <div className="p-4 mt-4 md:mt-14 lg:mt-4">
      {/* title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign={{xs: "center", sm: "start"}}
        fontSize={{ xs: "25px", sm: "30px" }}
      >
        Progress Dashboard
      </Typography>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-4 mt-5">
        {/* module cards */}
        <div className="md:col-span-8">
          {/* row one */}
          <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4 lg:gap-7">
            {/* card one */}
            <div className="rounded-md p-4 text-white bg-[#5843BE] lg:w-96">
              <p className="text-gray-300 mb-4">Deadline: 12:00 AM</p>

              <h3 className="text-xl font-medium">Power Cardio - Module 5</h3>
              <p className="text-gray-300">Cardio for beginners</p>

              <div className="flex items-center justify-between gap-4 mt-4">
                {/* member images */}
                <div className="flex items-center">
                  {/* one */}
                  <Image
                    className="object-cover rounded-full h-8 w-8"
                    width={30}
                    height={30}
                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="member one"
                  />
                  {/* two */}
                  <Image
                    className="object-cover rounded-full h-8 w-8 -ml-3"
                    width={30}
                    height={30}
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt="member one"
                  />
                  {/* three */}
                  <Image
                    className="object-cover rounded-full h-8 w-8 -ml-3"
                    width={30}
                    height={30}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="member one"
                  />
                </div>

                <p className="hover:cursor-pointer hover:text-gray-400">Start working out</p>
              </div>
            </div>

            {/* card two */}
            <div className="bg-[#FFEDE6] text-[#ff8b45] space-y-4 rounded-md p-4">
              {/* icon */}
              <CheckCircleOutlineIcon color="warning" />
              <p className="text-lg font-medium">Modules</p>
              <p className="text-xs">For today's workout</p>
            </div>
            {/* card three */}
            <div className="bg-[#F6F4FF] text-[#9082d1] space-y-4 rounded-md p-4">
              {/* icon */}
              <CheckCircleOutlineIcon color="action" />
              <p className="text-lg font-medium">Running</p>
              <p className="text-xs">250 steps today</p>
            </div>
          </div>

          {/* row two */}
          <div className="flex flex-col items-center gap-4 lg:gap-9 md:flex-row mt-5">
            {/* card one - challenges */}
            <div className="shadow-2xl p-4 rounded-md lg:w-[600px]">
              {/* title */}
              <div className="flex items-center justify-between">
              <div>
              <p className="font-medium">New challenge info</p>
              <p className="font-medium text-gray-400">13 Participants in this challenge</p>
              </div>
                <NotificationsNoneIcon color="action"/>
              </div>

              {/* challenge info */}
              <div className="flex items-center justify-between text-white bg-[#FFA067] rounded-xl p-4 mt-4">
                  <div>
                  <p className="text-lg font-medium">50 pushups challenge</p>
                  <p className="text-sm">5 of yours friends are participating</p>
                  </div>
                  <KeyboardArrowRightIcon/>
              </div>

              {/* your personal diet */}
              <div className="flex items-center justify-between mt-6 bg-slate-200 p-5 rounded-xl">
               <span className="bg-purple-200 p-2 rounded-full"> <ModeEditIcon color="action"/></span>
                <div>
                  <p className="text-lg font-bold">Your personal diet</p>
                  <p className="text-gray-400 text-sm">10+ instructions</p>
                </div>
                <KeyboardArrowRightIcon/>
              </div>
            </div>

            {/* card two - percentage base progrees */}
            <div className="p-4 rounded-md">
                <span className="p-3 bg-slate-300 rounded-xl shadow-md">
                  <DirectionsRunIcon fontSize="large"/>
                </span>
                <h2 className="text-xl font-bold my-5">Cardio for beginners</h2>
                <p className="font-medium">35%</p>
                <Slider color="error"  disabled defaultValue={30} />
            </div>
          </div>
        </div>

        {/* user profile section */}
        <div className="flex flex-col items-center md:col-span-4">

            {/* profile picture */}
            {session?.user?.image && <Image className="rounded-full" width={100} height={100} src={session?.user?.image} alt="profile picture"/>}
          
            <p className="font-bold mt-2">{session?.user?.name}</p>
            <p className="text-gray-400 font-bold text-sm">Pro Member</p>

            {/* discount card */}
            <div className="flex items-center justify-between gap-4 shadow-xl rounded-xl p-4">
              <div>
              <p className="font-medium">Get 10% discount now</p>
              <p className="text-gray-400 text-sm">for Meditation course</p>
              </div>
              <span className="bg-purple-200 p-2 rounded-full"><KeyboardArrowRightIcon/></span>
            </div>

            {/* course progress */}
            <div className="mt-7 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">Courses Progress</h2>

              {/* course one */}
              <div className="flex items-center gap-4">
                <p className="font-bold text-lg text-[#5843BE]">63%</p>
                <div>
                  <p className="font-medium">Power Cardio</p>
                  <p className="text-gray-400 text-sm">Grow your stamina</p>
                </div>
              </div>
              {/* course two */}
              <div className="flex items-center gap-4">
                <p className="font-bold text-lg text-[#ff8b45]">34%</p>
                <div>
                  <p className="font-medium">Yoga</p>
                  <p className="text-gray-400 text-sm">Become more flexible</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ManageProgress;
