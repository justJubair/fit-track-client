"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Slider data
const sliderData = [
    {
      "id": 1,
      "img": "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "tagline": "Unleash Your Inner Athlete",
      "short_description": "Transform your workouts into epic adventures with our cutting-edge fitness tracking app."
    },
    {
      "id": 2,
      "img": "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "tagline": "Sweat Smart, Live Strong",
      "short_description": "Elevate your fitness game intelligently – because every drop of sweat tells a success story."
    },
    {
      "id": 3,
      "img": "https://img.freepik.com/free-photo/self-building-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-ball-concept-sport-bodybuilding-healthy-lifestyle-motion-action_155003-35391.jpg?w=740&t=st=1705400947~exp=1705401547~hmac=1bca3143965c331403e6b5e2b13870fe1247ad272ed7a3e16753b776129bf7b9",
      "tagline": "Run, Jump, Conquer",
      "short_description": "Conquer your fitness goals with a dash of fun, a splash of motivation, and a sprinkle of personalization."
    },
    {
      "id": 4,
      "img": "https://img.freepik.com/free-photo/group-people-working-out-together-outdoors_23-2149891452.jpg?size=626&ext=jpg&ga=GA1.1.2056627829.1688575155&semt=sph",
      "tagline": "Fitness Redefined, Data Refined",
      "short_description": "Redesign your fitness journey with precise data insights – because your body deserves the best analytics."
    }
  ]
  

const CompetitionSlider = () => {
    return(
        <div className="min-h-screen">
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <h1 className='h-screen'>hello</h1>
        </SwiperSlide>
        <SwiperSlide>
         <h1>bye</h1>
        </SwiperSlide>
        <SwiperSlide>
        <h1>good night</h1>
        </SwiperSlide> */}

        {
            sliderData?.map(slide=> <SwiperSlide key={slide?.id}>
                <div className='relative min-h-screen'>
                <Image
          alt="Mountains"
          src={slide?.img}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
                </div>
            </SwiperSlide>)
        }
       
      </Swiper>
        </div>
    )}
export default CompetitionSlider;