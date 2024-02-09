"use client";
import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { Button } from "@mui/material";
import getChallenges from "@/app/api/get/getChallenges";

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getChallenges()
      .then((challengesData) => setChallenges(challengesData))
      .catch((error) => console.error("Error:", error.message));
  }, []);
  return (
    <div className="mx-auto my-24 container ">
      <div>
        <h2 className="text-3xl font-bold mb-4 px-2">Choose Your Challenge</h2>
        <p className="black mb-8 px-2">
          Explore the challenges below and pick the one that inspires you the
          most. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam vitae sapiente ea eveniet ipsa adipisci pariatur, dolore
          optio modi tempora!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge?.challengeName} challenge={challenge} />
        ))}
      </div>
      <div className="flex justify-end my-5">
        <Button variant="outlined">View more Challenges</Button>
      </div>
    </div>
  );
};

export default Challenge;
