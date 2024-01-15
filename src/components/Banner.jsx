import { Container } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <Container maxWidth="xl">
      <video src={require('../assets/bannerVideo.mp4')} autoPlay loop muted />
    </Container>
  );
};

export default Banner;