import React from "react";
import ChallengeCard from "./ChallengeCard";

const Challenge = () => {
  const challenges = ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6"];
  return (
    <div className="mx-auto my-24 container px-2">
      <h2 className="text-3xl font-bold mb-4">Choose Your Challenge</h2>
      <p className="text-gray-600 mb-8">
        Explore the challenges below and pick the one that inspires you the
        most. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        vitae sapiente ea eveniet ipsa adipisci pariatur, dolore optio modi
        tempora!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenge;
