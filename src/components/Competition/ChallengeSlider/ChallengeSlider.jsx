"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import sliderImg01 from "../../../assets/images/slider01.jpg";
import sliderImg02 from "../../../assets/images/slider02.jpg";
import sliderImg03 from "../../../assets/images/slider03.jpg";
import sliderImg04 from "../../../assets/images/slider04.jpg";


import { Box, Typography } from "@mui/material";


const ChallengeSlider = () => {

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
    
        autoplay={{delay:2500, disableOnInteraction:false}}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {/* slider one */}
        <SwiperSlide>
          <Box position="relative" height="100vh">
             {/* Slider Text */}
             <Box position={"absolute"} zIndex={50} color={"white"} top={"40%"} left={{lg:"5%", sm:"10%", xs: "12%"}}>
             
              <Typography 
              variant="h2"
              fontSize={{xs: "30px", lg: "50px", sm: "40px"}}
              width={{lg:"75%", xs: "100%"}} fontWeight="bold">Unleash Your Inner Athlete</Typography>
              <Typography variant="subtitle1" fontSize={{xs:"14px", sm: "16px"}} width="70%">Transform your workouts into epic adventures with our cutting-edge fitness tracking app.</Typography>
            </Box>
            <Image
              alt="slider image one"
              src={sliderImg01}
              fill
              priority
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />  
            {/* overlay */}
            <Box className="h-screen absolute top-0 left-0 w-full bg-black/40"></Box>
           
          </Box>
        </SwiperSlide>

        {/* slider two */}
        <SwiperSlide>
        <Box position="relative" height="100vh">
             {/* Slider Text */}
             <Box position={"absolute"} zIndex={50} color={"white"} top={"40%"} left={{lg:"5%", sm:"10%", xs: "12%"}}>
             
              <Typography 
              variant="h2"
              fontSize={{xs: "30px", lg: "50px", sm: "40px"}}
              width={{lg:"75%", xs: "100%"}} fontWeight="bold">Sweat Smart, Live Strong</Typography>
              <Typography variant="subtitle1" fontSize={{xs:"14px", sm: "16px"}} width="70%">Elevate your fitness game intelligently, because every drop of sweat tells a success story.</Typography>
            </Box>
            <Image
              alt="slider image one"
              src={sliderImg02}
              fill
              priority
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />  
            {/* overlay */}
            <Box className="h-screen absolute top-0 left-0 w-full bg-black/60"></Box>
           
          </Box>
        </SwiperSlide>

        {/* slidet three */}
        <SwiperSlide>
        <Box position="relative" height="100vh">
             {/* Slider Text */}
             <Box position={"absolute"} zIndex={50} color={"white"} top={"40%"} left={{lg:"5%", sm:"10%", xs: "12%"}}>
             
              <Typography 
              variant="h2"
              fontSize={{xs: "30px", lg: "50px", sm: "40px"}}
              width={{lg:"75%", xs: "100%"}} fontWeight="bold">Run, Jump, Conquer</Typography>
              <Typography variant="subtitle1" fontSize={{xs:"14px", sm: "16px"}} width="70%">Conquer your fitness goals with a dash of fun, a splash of motivation, and a sprinkle of personalization.</Typography>
            </Box>
            <Image
              alt="slider image one"
              src={sliderImg03}
              fill
              priority
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />  
            {/* overlay */}
            <Box className="h-screen absolute top-0 left-0 w-full bg-black/60"></Box>
           
          </Box>
        </SwiperSlide>

        {/* slider four */}
        <SwiperSlide>
        <Box position="relative" height="100vh">
             {/* Slider Text */}
             <Box position={"absolute"} zIndex={50} color={"white"} top={"40%"} left={{lg:"5%", sm:"10%", xs: "12%"}}>
             
              <Typography 
              variant="h2"
              fontSize={{xs: "30px", lg: "50px", sm: "40px"}}
              width={{lg:"75%", xs: "100%"}} fontWeight="bold">Fitness Redefined, Data Refined</Typography>
              <Typography variant="subtitle1" fontSize={{xs:"14px", sm: "16px"}} width="70%">Redesign your fitness journey with precise data insights – because your body deserves the best analytics.</Typography>
            </Box>
            <Image
              alt="slider image one"
              src={sliderImg04}
              fill
              priority
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />  
            {/* overlay */}
            <Box className="h-screen absolute top-0 left-0 w-full bg-black/70"></Box>
           
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default ChallengeSlider;
