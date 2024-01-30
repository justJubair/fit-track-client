import { Box, Button, Container, List, ListItem, Typography, Grid, ListItemIcon } from "@mui/material";

import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const Prices = () => {
    return (
        <div>
            <Box>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: '500', marginBottom:'40px' }}>Pricing</Typography>

                {/* Grid with 12 columns on large screens, 8 columns on medium screens, and 4 columns on small screens */}
                <Grid container spacing={2}>
                    {/* First item */}
                    <Grid item xs={12} md={8} lg={4}>
                        <Box sx={{ border: '1px solid black', padding: '30px', borderRadius:'10px' }}>
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
                                <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[red] transition-all">Buy Now</button>
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
                        <Box sx={{ border: '1px solid black', padding: '30px', borderRadius:'10px' }}>
                            <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: '600' }}>Basic</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '300' }}>Basic plan with kool feature</Typography>
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
                                <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[red] transition-all">Buy Now</button>
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
                        <Box sx={{ border: '1px solid black', padding: '30px', borderRadius:'10px' }}>
                            <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: '600' }}>Basic</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '300' }}>Basic plan with kool feature</Typography>
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
                                <button className="bg-[#252525] px-8 py-2 my-6 text-white w-full rounded-md hover:bg-[red] transition-all">Buy Now</button>
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
    );
};

export default Prices;