"use client";
import React from "react";
import bannerVideo from "../../assets/videos/bannerVideo.mp4";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box position="relative">

    
   
      <video width="100%" className="h-screen object-cover" src={bannerVideo} loop muted autoPlay>

      </video>
   
      {/* overlay */}
      <Box position="absolute" height="100vh" width="100%" top="0" bgcolor="rgba(0, 0, 0, 0.5)"></Box>
      <Box position="absolute" top={{sm: "30%", xs: "25%"}} left="05%" width={{lg: "50%", }} paddingX={4}>
        {/* tagline */}
        <Typography
          variant="h3"
          style={{
            background: "-webkit-linear-gradient(45deg, #378AE5 30%, white 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontWeight="bold"
          fontSize={{lg: "50px", sm: "45px", xs: "40px"}}
        >
          Power Up Your Potential with FitTrack
        </Typography>
        {/* subheading */}
        <Typography level="title-lg" color="white" marginY="20px" width={{lg:"70%",sm: "60%"}}>Revitalize Your Body and Mind: Embark on a Fitness Journey Fueled by Passion, Purpose, and Persistence!</Typography>

        {/* explore now button */}
        <Button variant="outlined" size="large" sx={{color: "#76AEEB"}}>Explore </Button>
      </Box>
    </Box>
  );
};

export default Banner;
