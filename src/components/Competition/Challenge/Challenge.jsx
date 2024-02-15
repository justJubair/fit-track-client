"use client";
import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { Button } from "@mui/material";
import getChallenges from "@/app/api/get/getChallenges";
import { ToastContainer } from "react-toastify";

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getChallenges()
      .then((challengesData) => setChallenges(challengesData))
      .catch((error) => console.error("Error:", error.message));
  }, []);
  return (
    <div className="mx-auto my-24 container ">
      <div >
        <h2 className="text-3xl font-bold mb-4 px-2">Choose Your Challenge</h2>
        <p className="black mb-8 px-2">
        Explore the challenges below and choose the one that resonates with you. Life's journey is a canvas of opportunities and obstacles, each contributing to your unique story. Embrace challenges as stepping stones to growth and success. Your path is yours to shape, so seize each moment with courage and resilience.
        </p>
        
      </div>
      <div className="px-2">
      <div className="grid md:grid-cols-2  gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge?.challengeName} challenge={challenge} />
        ))}
      </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Challenge;
