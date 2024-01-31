"use client"

import { Box } from "@mui/system";
import Image from "next/image";

const ServiceDetails = () => {
    return(
        <>
        {/* <Box height="64px" bgcolor="black"></Box> */}
        <Box position="relative" height="100vh">
        <Image src="https://raw.githubusercontent.com/justJubair/fit-track-client/service-detail-page-jubair/src/assets/images/serviceDetailBanner.jpg?token=GHSAT0AAAAAACJ2ZZJBXVVCTLB3BOFUS7SMZN2AY3A"
              fill
              priority
              style={{
                objectFit: "cover",
                
              }} alt="service detail page banner"/>
        </Box>
        {/* overlay */}
       <div className="absolute h-screen w-full top-0 left-0 bg-black/70"></div>
        </>
    )}
export default ServiceDetails;