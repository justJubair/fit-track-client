"use client";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

// React vertical timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import banner img
import serviceDetaillBanner from "../../assets/images/serviceDetailBanner.jpg"



// import raw css for animated arrow
import "./AnimateArrow.css"

// import aos
import AOS from "aos";
import { useEffect } from "react";

const ServiceDetails = () => {

    // Initialization of AOS
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <Box bgcolor="black">
      <Box position="relative" height="100vh">
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
          Overview of Power Cardio
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
          Transform your workouts into epic adventures with our cutting-edge
          fitness tracking app.
        </Typography>
      </Box>

      {/* animated arrow */}
      <Box position="absolute" bottom="15%" right="50%">
        <div className="arrow">
          <span></span><span></span><span></span>
        </div>
      </Box>

      {/* Timeline */}


<VerticalTimeline>

  {/* objective */}
<div data-aos="zoom-in-up">
<VerticalTimelineElement
  visible={true}
    className="vertical-timeline-element--work"
    data-aos="zoom-in-up"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
</div>

{/* total duration */}

<VerticalTimelineElement
data-aos="zoom-in-up"
   visible={true}
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  
  {/* total vidoes */}
  <div data-aos="zoom-in-up">
  <VerticalTimelineElement
   visible={true}
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  </div>
 
  
</VerticalTimeline>
    </Box>
  );
};
export default ServiceDetails;
