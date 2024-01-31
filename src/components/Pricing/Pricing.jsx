'use client'
import { Box, Button, Container, List, ListItem, Typography, Grid, ListItemIcon } from "@mui/material";

import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const Prices = () => {
    return (
        <Box>
            <Box className="bg-black h-16"></Box>
            <div className="max-w-6xl mx-auto my-40">
                <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Typography variant="h4" sx={{ width:1/2 ,textAlign: 'center', fontWeight: '500', marginLeft:'auto', marginRight:'auto',marginBottom: '10px' }}>Unlock Your Fitness Journey with <span className="text-[#378ae5]">Tailored Pricing Plans</span></Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: '300', marginBottom: '50px' }}>
                        Elevate your lifestyle with our exclusive fitness plans—crafted for your best self. Experience invigorating workouts, personalized guidance, and a supportive community. Invest in your well-being today!
                    </Typography>

                    {/* Grid with 12 columns on large screens, 8 columns on medium screens, and 4 columns on small screens */}
                    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                        {/* First item */}
                        <Grid item xs={12} md={8} lg={4}>
                            <Box sx={{ border: '1px solid black', padding: '30px', borderRadius: '10px' }}>
                                <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>
                                    <Typography variant="h5" sx={{ fontWeight: '600' }}>Basic</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: '300' }}>Basic plan with kool feature</Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography variant="h3">
                                            $15
                                        </Typography>
                                        <Typography>
                                            /month
                                        </Typography>
                                    </Box>
                                    <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[#378ae5] transition-all">Buy Now</button>
                                </Box>
                                <Box>
                                    <List>
                                        <ListItem>✅ Personalized Workout Tracking</ListItem>
                                        <ListItem>✅ Weekly Progress Reports</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4}>
                            <Box sx={{ border: '1px solid black', padding: '30px', borderRadius: '10px' }}>
                                <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>
                                    <Typography variant="h5" sx={{ fontWeight: '600' }}>Pro</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: '300' }}>Pro plan with Pro feature</Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography variant="h3">
                                            $35
                                        </Typography>
                                        <Typography>
                                            /month
                                        </Typography>
                                    </Box>
                                    <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[#378ae5] transition-all">Buy Now</button>
                                </Box>
                                <Box>
                                    <List>
                                        <ListItem>✅ Personalized Workout Tracking</ListItem>
                                        <ListItem>✅ Weekly Progress Reports</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4}>
                            <Box sx={{ border: '1px solid black', padding: '30px', borderRadius: '10px' }}>
                                <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>
                                    <Typography variant="h5" sx={{ fontWeight: '600' }}>Premium</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: '300' }}>Premium plan with premium feature</Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography variant="h3">
                                            $50
                                        </Typography>
                                        <Typography>
                                            /month
                                        </Typography>
                                    </Box>
                                    <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[#378ae5] transition-all">Buy Now</button>
                                </Box>
                                <Box>
                                    <List>
                                        <ListItem>✅ Personalized Workout Tracking</ListItem>
                                        <ListItem>✅ Weekly Progress Reports</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                        <ListItem>✅ Basic Fitness Analytics</ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box>
                    </Box>
                </Box>
            </div>

        </Box>

    );
};

export default Prices;