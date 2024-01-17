"use client"
import React from 'react';
import bannerVideo from "../../assets/videos/bannerVideo.mp4"
import { Box, Button, Typography } from '@mui/material';

const Banner = () => {
  return (

    <Box position="relative">
        <video  height="100vh" width="100%" object src={bannerVideo} autoPlay muted loop />
        {/* overlay */}
        <Box position="absolute" height="100vh" width="100%"></Box>
      <Box position="absolute" top="30%">
        <Typography variant='h2' color="white">Lorem ipsum dolor sit amet.</Typography>
        <Button variant='outlined'>Explore </Button>
      </Box>
    
    </Box>

  );
};

export default Banner;
