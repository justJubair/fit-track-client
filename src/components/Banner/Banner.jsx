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
        object
        src={bannerVideo}
        autoPlay
        muted
        loop
      />
      {/* overlay */}
      <Box position="absolute" height="100vh" width="100%" top="0" bgcolor="rgba(0, 0, 0, 0.5)"></Box>
      <Box position="absolute" top="30%">
        <Typography
          variant="h2"
          style={{
            background: "-webkit-linear-gradient(45deg, #1FD5F7 30%, white 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontWeight="bold"
        >
          Power Up Your Potential with FitTrack
        </Typography>
        <Button variant="outlined">Explore </Button>
      </Box>
    </Box>
  );
};

export default Banner;
