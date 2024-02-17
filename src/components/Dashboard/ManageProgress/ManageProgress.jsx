"use client";

import Image from "next/image";
// import css
// import "./ManageProgress.css";

// icons
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from "@mui/material";

const ManageProgress = () => {
  return (
    <div className="p-4">
       {/* title */}
     <Typography variant="h4" fontWeight="bold" fontSize={{xs: "25px",sm:"30px"}}>Progress Dashboard</Typography>
  <div  className="grid grid-cols-12 gap-4 mt-5">
    
    {/* module cards */}
    <div className="col-span-9">

      {/* row one */}
     <div className="flex items-center gap-5">
       {/* card one */}
       <div className="rounded-md p-4 text-white bg-[#5843BE] lg:w-80">
        <p className="text-gray-300 mb-4">Deadline: 12:00 AM</p>

        <h3 className="text-xl font-medium">Power Cardio - Moduel 5</h3>
        <p className="text-gray-300">Cardio for beginners</p>

   
        <div className="flex items-center justify-between mt-4">

           {/* member images */}
        <div className="flex items-center">
            {/* one */}
            <Image className="object-cover rounded-full h-8 w-8" width={30} height={30} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="member one"/>
          {/* two */}
            <Image className="object-cover rounded-full h-8 w-8 -ml-3" width={30} height={30} src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="member one"/>
          {/* three */}
            <Image className="object-cover rounded-full h-8 w-8 -ml-3" width={30} height={30} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="member one"/>
        </div>

        <p>Start working out</p>
        </div>
      </div>

      {/* card two */}
      <div className="bg-[#FFEDE6] text-[#ff8b45] space-y-4 rounded-md p-4">
        {/* icon */}
      <CheckCircleOutlineIcon color="warning"/>
      <p className="text-lg font-medium">Modules</p>
      <p className="text-xs">For today's workout</p>
      </div>
      {/* card three */}
      <div className="bg-[#F6F4FF] text-[#9082d1] space-y-4 rounded-md p-4">
        {/* icon */}
      <CheckCircleOutlineIcon color="action"/>
      <p className="text-lg font-medium">Running</p>
      <p className="text-xs">250 steps today</p>
      </div>
     </div>


    </div>
    
    {/* user profile */}
    <div className="col-span-3">
      <p>user profile</p>
    </div>

    </div>

    </div>
  
  );
};
export default ManageProgress;
