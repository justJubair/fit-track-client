"use client";
import React from "react";
import bannerVideo from "../../assets/videos/bannerVideo.mp4";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box position="relative">
      <video
        height="100vh"
        width="100%"
        src={bannerVideo}
        autoPlay
        muted
        loop
      />
      {/* overlay */}
      <Box position="absolute" height="100vh" width="100%" top="0" bgcolor="rgba(0, 0, 0, 0.5)"></Box>
      <Box position="absolute" top={{lg: "30%",}} left={{lg: "05%"}} width={{lg: "40%"}} >
        {/* tagline */}
        <Typography
          variant="h3"
          style={{
            background: "-webkit-linear-gradient(45deg, #1FD5F7 30%, white 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontWeight="bold"
        >
          Power Up Your Potential with FitTrack
        </Typography>
        {/* subheading */}
        <Typography level="title-lg" color="white" marginY="20px">Revitalize Your Body and Mind: Embark on a Fitness Journey Fueled by Passion, Purpose, and Persistence!</Typography>

        {/* explore now button */}
        <Button variant="outlined">Explore </Button>
      </Box>
    </Box>
  );
};

export default Banner;
