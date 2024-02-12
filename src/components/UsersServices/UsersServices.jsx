'use client';
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { getAllServices } from "@/api/getAllServices";


const UsersServices = ({userServices}) => {

    //checking user plan
    const user = 'Basic';
    
 
    //filtering services according to user plan
    const userModules = userServices.filter((serv) => serv.category === user)

    return (
        <Box>
            <Box className="bg-black h-16"></Box>
            <div className="max-w-6xl mx-auto mt-20 mb-40">
                <Typography variant="h4" sx={{ width: 1 / 2, textAlign: 'center', fontWeight: '500', mx: 'auto', marginBottom: '40px' }}>Your <span className="text-[#378ae5]">Courses</span></Typography>
                <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                {
                    userModules?.map(serv => (
                        <Grid item xs={12} md={8} lg={4} key={serv._id}>
                            <Box >
                                <Box sx={{
                                    backgroundImage: `url(${serv.thumbnail})`, paddingTop: '50%', boxShadow: '0px 0px 1px rgba(77, 145, 255, 0.02), ' +
                                        '0px 2px 4px rgba(77, 145, 255, 0.03), ' +
                                        '0px 4px 9px rgba(77, 145, 255, 0.05), ' +
                                        '0px 6px 15px rgba(77, 145, 255, 0.06), ' +
                                        '0px 10px 24px rgba(77, 145, 255, 0.08)', borderRadius: '10px'
                                }}>
                                    <Box sx={{ px: 3, paddingTop: '10px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: 'white', boxShadow: 3 }}>
                                        <Typography variant="h6" color="text.primary" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                                            {serv?.heading}
                                        </Typography>
                                        <Typography variant="body2" color="black" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                                        {serv?.subheading}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
                                            <Typography>
                                                <span className="text-[#378ae5]">Duration:</span> {serv?.duration}
                                            </Typography>
                                            <Typography>
                                                <span className='text-[#378ae5]'>Number of vidoes:</span> {serv?.numberOfVideos}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                <span className='text-[#378ae5]'>Category:</span> {serv?.category}
                                            </Typography>
                                        </Box>
                                        <Box disableSpacing sx={{ px: 3, marginTop: '10px', marginBottom: '10px' }}>
                                            <Link href={`/modules/${serv.serviceId}`} className='ml-auto'>
                                                <button className="bg-[#252525] px-8 py-2 mb-6 text-white w-full rounded-[20px] hover:bg-[#378ae5] transition-all">Continue</button></Link>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
                </Box>
            </div>
        </Box>
    );
};

export default UsersServices;