"use client";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const ServiceDetails = () => {
  return (
    <>
      {/* <Box height="64px" bgcolor="black"></Box> */}
      <Box position="relative" height="100vh">
        <Image
          src="https://raw.githubusercontent.com/justJubair/fit-track-client/service-detail-page-jubair/src/assets/images/serviceDetailBanner.jpg?token=GHSAT0AAAAAACJ2ZZJBXVVCTLB3BOFUS7SMZN2AY3A"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
          alt="service detail page banner"
        />
      </Box>
      {/* overlay */}
      <div className="absolute h-screen w-full top-0 left-0 bg-black/80"></div>

      {/* banner title */}
      <Box position="absolute" top="35%" left={{lg:"5%", sm:"10%", xs: "12%"}}>
        <Typography
          variant="h3"
          fontWeight="bold"
          fontSize={{xs: "30px", lg: "50px", sm: "40px"}}
          style={{
            background:
              "-webkit-linear-gradient(45deg, white 30%, #378AE5 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Overview of Power Cardio
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" fontSize={{xs:"14px", sm: "16px"}} width="70%"  style={{
            background: "-webkit-linear-gradient(45deg, #64b5f6, white 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Transform your workouts into epic adventures with our cutting-edge fitness tracking app.</Typography>
      </Box>
    </>
  );
};
export default ServiceDetails;
