"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography, Chip } from "@mui/material";
const Service = ({ serv }) => {
  // Initialization of AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Grid item xs={12} md={8} lg={4} key={serv._id}>
      <Box >
        <Box sx={{
          backgroundImage: `url(${serv.thumbnail})`, paddingTop: '40%', boxShadow: '0px 0px 1px rgba(77, 145, 255, 0.02), ' +
            '0px 2px 4px rgba(77, 145, 255, 0.03), ' +
            '0px 4px 9px rgba(77, 145, 255, 0.05), ' +
            '0px 6px 15px rgba(77, 145, 255, 0.06), ' +
            '0px 10px 24px rgba(77, 145, 255, 0.08)', borderRadius: '10px'
        }}>
          <Box sx={{ px: 3, paddingTop: '10px', paddingBottom: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: 'white', boxShadow: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2, alignItem:'center' }}>
              <Chip label={serv.category} />
              <Typography sx={{ my:'auto' }}>
               ⭐ {serv?.rate}
              </Typography>
            </Box>
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
              {serv?.heading}
            </Typography>
            <Typography variant="body2" color="black" sx={{}}>
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
              <Link href={`/service/${serv._id}`} className="text-[#378ae5] font-bold rounded-md">
                Choose a service... 
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Service;
