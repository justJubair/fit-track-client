'use client';
import { Box, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from "next/link";
import { getServices } from "@/utils/getServices";

const UsersServices = ({userServices:allServices}) => {

    const user = 'Basic';

    // const allServices = await getServices();
    const userServices = allServices.filter((serv) => serv.category === user)


    return (
        <Box>
            <Box className="bg-black h-16"></Box>
            <div className="max-w-6xl mx-auto mt-20 mb-40">
                <Typography variant="h4" sx={{ width: 1 / 2, textAlign: 'center', fontWeight: '500', mx: 'auto', marginBottom: '40px' }}>Your <span className="text-[#378ae5]">Services</span></Typography>
                <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                        {
                            userServices?.map(serv => (
                                <Grid item xs={12} md={8} lg={4} key={serv._id}>
                                    <Box >
                                        <Card sx={{ borderRadius: '10px', boxShadow: 3 }}>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image="https://i.ibb.co/7S6Gmmh/dbk.jpg"
                                                alt="Paella dish"
                                            />
                                            <CardContent sx={{ px: 3 }}>
                                                <Typography variant="h6" color="text.primary" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                                                    {serv?.heading}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                                                    This impressive paella is a perfect party dish and a fun meal to cook
                                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                    if you like.
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography>
                                                        <span className="text-[#378ae5]">Duration:</span> {serv?.duration}
                                                    </Typography>
                                                    <Typography>
                                                        <span className='text-[#378ae5]'>Number of vidoes:</span> {serv?.numberOfVideos}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                            <CardActions disableSpacing sx={{ px: 3 }}>
                                                <Link href={`/modules/${serv.serviceId}`} className='ml-auto'>
                                                    <button className="bg-[#252525] px-8 py-2 mb-6 text-white w-full rounded-[20px] hover:bg-[#378ae5] transition-all">Continue</button></Link>
                                            </CardActions>
                                        </Card>
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