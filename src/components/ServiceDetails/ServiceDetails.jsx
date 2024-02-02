"use client";
import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Image from "next/image";

// React vertical timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import banner img
import serviceDetaillBanner from "../../assets/images/serviceDetailBanner.jpg";

// import raw css for animated arrow
import "./AnimateArrow.css";

// import aos
import AOS from "aos";
import { useEffect } from "react";

// icons
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Link from "next/link";

const ServiceDetails = ({service}) => {
  

  // Initialization of AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // get todays date with vanilla js
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;

  return (
    <Box bgcolor="black">
      <Box position="relative" height="100vh" marginBottom="3rem">
        <Image
          src={serviceDetaillBanner}
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
      <Box
        position="absolute"
        top="35%"
        left={{ lg: "5%", sm: "10%", xs: "12%" }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          fontSize={{ xs: "30px", lg: "50px", sm: "40px" }}
          style={{
            background:
              "-webkit-linear-gradient(45deg, white 30%, #378AE5 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         {service?.heading}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          fontSize={{ xs: "14px", sm: "16px" }}
          width="70%"
          style={{
            background: "-webkit-linear-gradient(45deg, #64b5f6, white 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         {service?.subheading}.
        </Typography>
      </Box>

      {/* animated arrow */}
      <Box position="absolute" bottom="15%" right="50%">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Box>

     <Container>
       {/* Timeline */}
       <VerticalTimeline>
        {/* objective */}
        <div data-aos="zoom-in-up"
      data-aos-duration="1500">
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
          
            contentStyle={{ background: "linear-gradient(45deg, #1976d2, #1565c0 90%)", color: "#fff" }}
            date={today}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<FlagCircleIcon />}
          >
            <h3 className="vertical-timeline-element-title">Goal</h3>
            <p>
              Elevate your fitness game intelligently, because every drop of
              sweat tells a success story.
            </p>
          </VerticalTimelineElement>
        </div>

        {/* total duration */}
       
        <VerticalTimelineElement
          visible={true}
          contentStyle={{ background: "linear-gradient(45deg, #1976d2, #1565c0 90%)", color: "#fff" }}
          className="vertical-timeline-element--work"
   
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<TimelapseIcon />}
        >
          <h3 className="vertical-timeline-element-title">Duration</h3>
          
          <p>
           {service?.duration} Days of blood, sweat and tears
          </p>
        </VerticalTimelineElement>

        {/* total vidoes */}
        <div data-aos="zoom-in-up"  data-aos-duration="2000">
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "linear-gradient(45deg, #1976d2, #1565c0 90%)", color: "#fff" }}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<FitnessCenterIcon />}
          >
            <h3 className="vertical-timeline-element-title">Total Workouts</h3>
    
            <p>{service?.numberOfVideos} workout sessions with our expert trainer</p>
          </VerticalTimelineElement>
        </div>
      </VerticalTimeline>
          {/* timeline ends */}

          {/* purchase button */}
          <Link href="/modules">
          <Stack direction="row" justifyContent="center" paddingTop="2rem" paddingBottom={{sm: "10rem", xs: "5rem"}}><Button sx={{width: "200px"}} variant="outlined" size="large">Enroll Now</Button></Stack>
          </Link>
     </Container>
    </Box>
  );
};
export default ServiceDetails;
