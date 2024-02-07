'use client';
import { Avatar, Box, CardContent, Chip, Grid, Typography, CardOverflow, CardActions, ButtonGroup, Button, Card } from "@mui/material";
import Image from "next/image";

const Trainers = ({ allTrainers }) => {
    console.log(allTrainers)
    return (
        <Box>
            <Box className="bg-black h-16"></Box>
            <Box sx={{ maxWidth: '1336px', mx: 'auto', my: 3 }}>
                <Typography variant="h4" sx={{ width: 1 / 2, textAlign: 'center', fontWeight: '500', mx: 'auto', marginBottom: '40px' }}>Get your<span className="text-[#378ae5]">Trainers Here</span></Typography>
                <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Grid container sx={{ justifyContent: "center" }}>
                        {
                            allTrainers.map((train) =>
                                <Grid item xs={12} md={8} lg={3} key={train._id}>
                                    <div class="flex items-center justify-center rounded-md">
                                        <div class="w-64 rounded-lg border-2  border-[#252525] bg-transparent p-4 text-center shadow-lg">
                                            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                                                <Image width={100} height={100} src={train.profile_image} />
                                            </div>
                                            <h2 class="mt-4 text-xl font-bold text-indigo-400">{train.name}</h2>
                                            <p class="mb-4 text-black">{train.specialization}</p>
                                            <div class="flex items-center justify-center gap-4">
                                                <button className="bg-black px-6 py-2 rounded-[20px] text-white">Connect</button>
                                                <button className="bg-black px-6 py-2 rounded-[20px] text-white">Details</button>
                                            </div>
                                        </div>
                                    </div>

                                </Grid>
                            )
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Trainers;