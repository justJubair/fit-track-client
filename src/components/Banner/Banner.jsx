import { Container } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (

   <div>
    <video src={require('../../assets/bannerVideo.mp4')} autoPlay muted loop />
   </div>

  );
};

export default Banner;

{/* <Container maxWidth='xl'>

</Container> */}