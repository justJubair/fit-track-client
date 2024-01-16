"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import sliderImg01 from "../../assets/images/slider01.jpg";
import sliderImg02 from "../../assets/images/slider05.jpg";
import sliderImg03 from "../../assets/images/slider06.jpg";
import sliderImg04 from "../../assets/images/slider04.jpg";
import { Box, Typography } from "@mui/material";


// Slider data
const sliderData = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tagline: "Unleash Your Inner Athlete",
    short_description:
      "Transform your workouts into epic adventures with our cutting-edge fitness tracking app.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tagline: "Sweat Smart, Live Strong",
    short_description:
      "Elevate your fitness game intelligently – because every drop of sweat tells a success story.",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/self-building-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-ball-concept-sport-bodybuilding-healthy-lifestyle-motion-action_155003-35391.jpg?w=740&t=st=1705400947~exp=1705401547~hmac=1bca3143965c331403e6b5e2b13870fe1247ad272ed7a3e16753b776129bf7b9",
    tagline: "Run, Jump, Conquer",
    short_description:
      "Conquer your fitness goals with a dash of fun, a splash of motivation, and a sprinkle of personalization.",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/group-people-working-out-together-outdoors_23-2149891452.jpg?size=626&ext=jpg&ga=GA1.1.2056627829.1688575155&semt=sph",
    tagline: "Fitness Redefined, Data Refined",
    short_description:
      "Redesign your fitness journey with precise data insights – because your body deserves the best analytics.",
  },
];

const CompetitionSlider = () => {

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
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
              <Typography variant="subtitle1" fontSize={{xs:"14px", sm: "16px"}} width="70%">Elevate your fitness game intelligently – because every drop of sweat tells a success story.</Typography>
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
export default CompetitionSlider;
