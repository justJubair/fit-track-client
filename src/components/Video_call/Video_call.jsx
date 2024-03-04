"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { VideocamTwoTone } from "@mui/icons-material";
import videoAnimation from "./Animation - 1709216520437.json";
import Lottie from "lottie-react";

// import logo
import logo from "../../assets/images/logo04.png"
import Image from "next/image";
import Link from "next/link";

const VideoCall = () => {


  const [room, setRoomId] = useState("");
  const router = useRouter();
  const handelVideoCall = useCallback(
    (e) => {
      e.preventDefault();
      router.push(`/videoCall/${room}`);
    },
    [room, router]
  );

  return (
    <div>
     <Link className="absolute top-4 left-4" href="/"> <Image src={logo} width={150} sx={{height: "auto"}} alt="logo"/></Link>
      <div className="max-w-7xl mx-auto h-screen flex justify-center items-center px-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold my-8 md:leading-snug">
            Video calls with your Trainer
          </h1>
          <p className="text-xl my-6">
           
            Fit Track provides secure, easy-to-use video calls and meetings for
            You. Ultimate destination for achieving your health and wellness
            goals with a personalized touch.
          </p>
          <div className="flex flex-col  md:flex-row gap-6 py-5">
            <h1 className=" bg-green-600 text-white py-3 px-6 text-xl font-bold rounded flex justify-center items-center gap-2">
              <VideocamTwoTone /> Room
            </h1>
            <input
              className="border-2 px-4 rounded md:w-96 py-3"
              type="Room number"
              required
              placeholder="Enter Your Code"
              onChange={(e) => setRoomId(e.target.value)}
            />

            {room === "" ? (
              <button className={` text-black p-2 opacity-50`}>Join</button>
            ) : (
              <button
                onClick={handelVideoCall}
                className="bg-green-600 text-white py-2 px-6 text-lg font-bold rounded"
              >
                Join
              </button>
            )}
          </div>
        </div>
        <div className="hidden md:w-1/2 md:block ">
          <Lottie animationData={videoAnimation} />;
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
