import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Poster = () => {
  return (
    <div className="py-[120px]">
      <Marquee autoFill={true} speed={30}>
        <div className="flex flex-col gap-6">
          <Image
            src="https://shorturl.at/lKQZ1"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="https://shorturl.at/aikPQ"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="https://shorturl.at/hCDEL"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className=" mx-6 flex flex-col gap-6">
          <Image
            src="https://shorturl.at/cewVX"
            alt=""
            width={500}
            height={500}
          />
          <Image src="https://t.ly/B2eTb" alt="" width={500} height={500} />
          <Image src="https://t.ly/lLzEX" alt="" width={500} height={500} />
        </div>
      </Marquee>
      <div className="bg-black">
        <Marquee pauseOnHover={true} speed={80}>
          <div className="text-white p-6 italic flex gap-10">
            <p>
            “I hate every minute of training. But I said, don’t quit. Suffer
              now and live the rest of your life as a champion.” — Mohamm1ad Ali
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
