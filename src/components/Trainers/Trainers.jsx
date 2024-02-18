'use client';
import { Avatar, Box, CardContent, Chip, Grid, Typography, CardOverflow, CardActions, ButtonGroup, Button, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./trainer.css"
import { ToastContainer, toast } from "react-toastify";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Trainers = ({ allTrainers }) => {
    console.log(allTrainers)
    const handleConnect = () => {
        toast.success('Connect request sent to trainer.')
    }
    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="main">
                <div className="max-w-7xl mx-auto ">
                    <Typography variant="h4" sx={{ width: 1 / 2, textAlign: 'center', fontWeight: '500', mx: 'auto', marginBottom: '40px', paddingTop: '20px' }}>Get your<span className="text-[#378ae5] ">Trainers Here</span></Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-3 gap-4 pb-12">
                        {
                            allTrainers.map((train) =>
                                <div key={train._id}>
                                    <div className="wrapper">
                                        <div className="img-area">
                                            <div className="inner-area">
                                                <Image width={100} height={100} src={train.profile_image} alt='trainer image' />
                                                {/* <Image width={100} height={100} src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='trainer image' /> */}

                                                {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""> */}
                                            </div>
                                        </div>
                                        <div className="icon arrow"><i className="fas fa-arrow-left"></i></div>
                                        <div className="icon dots"><i className="fas fa-ellipsis-v"></i></div>
                                        <div className="name flex justify-center items-center gap-2">
                                            {train.name}

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

                                        </div>
                                        <div className="about">{train.specialization}</div>
                                        <div className="social-icons">
                                            <a href="#" >
                                                <i ><Facebook></Facebook> </i>
                                            </a>
                                            <a href="#" >
                                                <i ><Twitter></Twitter></i>
                                            </a>
                                            <a href="#" >
                                                <i ><Instagram></Instagram></i>
                                            </a>
                                            <a href="#" >
                                                <i className="fab fa-youtube"><YouTube></YouTube></i>
                                            </a>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={handleConnect} >Connect</button>
                                            <Link href={`/trainers/${train._id}`}>
                                                <button>Details</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>



            <ToastContainer />
        </div>
    );
};

export default Trainers;