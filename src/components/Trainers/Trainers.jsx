'use client';
import { Avatar, Box, CardContent, Chip, Grid, Typography, CardOverflow, CardActions, ButtonGroup, Button, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

const Trainers = ({ allTrainers }) => {
  
const handleConnect=()=>{
    toast.success('Connect request sent to trainer.')
}
    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-6xl mx-auto my-6">
                <Typography variant="h4" sx={{ width: 1 / 2, textAlign: 'center', fontWeight: '500', mx: 'auto', marginBottom: '40px' }}>Get your<span className="text-[#378ae5]">Trainers Here</span></Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-3">
                    {
                        allTrainers.map((train) =>
                        // card
                            <div key={train._id}>
                                <div className="flex items-center justify-center rounded-md">
                                    <div className="w-64 rounded-lg border-2  border-[#252525] bg-transparent p-4 text-center shadow-lg">
                                        <span className="flex justify-end">
                                            {
                                                train.status === 'active' ?
                                                    <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="12" r="8" fill="currentColor" />
                                                    </svg>
                                                    :
                                                    <svg className="w-6 h-6 text-green-500 opacity-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="12" r="8" fill="currentColor" />
                                                    </svg>
                                            }

                                        </span>
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full -mt-6">
                                            <Image width={100} height={100} src={train.profile_image} alt='trainer image' />
                                        </div>
                                        <h2 className="mt-4 text-xl font-bold text-[#378ae5]">{train.name}</h2>
                                        <p className="mb-4 text-black">{train.specialization}</p>
                                        <div className="flex items-center justify-center gap-4">
                                            <button onClick={handleConnect} className="bg-black px-6 py-2 rounded-[20px] text-white transition-transform duration-300 transform hover:scale-90 focus:outline-none active:scale-110">Connect</button>
                                            <Link href={`/trainers/${train._id}`}><button className="bg-black px-6 py-2 rounded-[20px] text-white transition-transform duration-300 transform hover:scale-90 focus:outline-none active:scale-110">Details</button></Link>
                                        </div>
                                    </div>
                                   
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Trainers;