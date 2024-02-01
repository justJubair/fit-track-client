"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from 'next/image';
const Service = ({ serv }) => {
  // Initialization of AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="rounded-md mx-4 lg:mx-0" data-aos="zoom-in-up">
      <Link href={`/service/${serv._id}`} className="rounded-md">
        <Image
          width={300}
          height={300}
          sx={{ height: "auto" }}
          src={serv.thumbnail}
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default Service;
