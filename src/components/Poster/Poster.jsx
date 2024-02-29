import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Poster = () => {
  return (
    <div>
      <Marquee autoFill={true} speed={30}>
        <div className="flex flex-col gap-6">
          <Image
            src="https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="poster img 1"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px" }}
          />
          <Image
            src="https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=600"
            priority
            alt="poster img 2"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px", objectFit:"cover" }}
          />
          <Image
            src="https://images.pexels.com/photos/341003/pexels-photo-341003.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="poster img 3"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
        <div className=" mx-6 flex flex-col gap-6">
          <Image
            src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="poster img 4"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px" }}
          />
          <Image
            src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="poster img 5"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px" }}
          />
          <Image
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="poster img 6"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </Marquee>
      <div className="bg-black">
        <Marquee pauseOnHover={true} speed={80}>
          <div className="text-white p-6 italic flex gap-10">
            <p>
              “I hate every minute of training. But I said, don’t quit. Suffer
              now and live the rest of your life as a champion.” — Mohammad Ali
            </p>
            <p>
              “If it doesn’t challenge you, it won’t change you.” — Fred Devito
            </p>
            <p>
              “You’re only one workout away from a good mood.” — Health Coach
              Maria Marlowe
            </p>
            <p>
              “You can have results or excuses, but not both.” — Arnold
              Schwarzenegger
            </p>
            <p>“Nothing will work unless you do.” — Maya Angelou</p>
            <p>
              “Start where you are. Use what you have. Do what you can.” —
              Arthur Ashe
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Poster;
