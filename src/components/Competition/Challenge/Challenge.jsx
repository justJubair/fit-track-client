import React from "react";
import ChallengeCard from "./ChallengeCard";

const Challenge = () => {
  const challenges = [
    {
      name: "Object 1",
      imageURL: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "Alice",
    },
    {
      name: "Object 2",
      imageURL: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "Bob",
    },
    {
      name: "Object 3",
      imageURL: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "Charlie",
    },
    {
      name: "Object 4",
      imageURL: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "David",
    },
    {
      name: "Object 5",
      imageURL: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "Eve",
    },
    {
      name: "Object 6",
      imageURL: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdBy: "Frank",
    },
  ];
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
          <ChallengeCard key={challenge} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenge;
