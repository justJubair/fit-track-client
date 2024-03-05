"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import PrivateRoute from "../Private/PrivateRoute";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

const Trainers2 = ({ allTrainers }) => {

    const { data: session } = useSession();

    const router = useRouter();

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        if (!session) {
            signIn()
        }
        if (session && session.user && session.user.email) {
            axios
                .get(
                    `https://fit-track-server.vercel.app/api/v1/singleuser?email=${session.user.email}`
                )
                .then((res) => {
                    setUserData(res.data);
                });
        } else {
            router.push("/");
        }
    }, [router, session]);
    const userId = userData._id;

    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const handleConnect = () => {
        toast.success('Request sent!')
        console.log('clicked')
    };

    const toggleModal = (trainerId) => {
        setSelectedTrainer(trainerId);
        document.body.classList.toggle("open-modal");
    };

    const handleShareReq = (temail) => {

        const userDetails = {
            targetId: userId,
            userEmail: session.user.email,
            userName: userData.username,
            userImage: session.user.image,
            requestStatus: "pending",
            seenStatus: false,
        };

        axios
            .post("https://fit-track-server.vercel.app/api/v1/postdatainuserfriendlist", {
                temail,
                userDetails,
            })
            .then((res) => {
                if (res.data === "Request Sent") {
                    toast.success('Request sent!')
                    router.push("https://fit-track-server.vercel.app/trainers");
                }
            })
            .catch((error) => {
                if (error.response.data === "User already in friend list") {
                    toast('Request was sent!', {
                        style: {
                            backgroundColor: '#378ae5',
                            color: 'white'
                        }
                    })
                }

            });
    };

    return (
        <PrivateRoute>
            <div className="bg-[#e8ead5]">
                <div className="bg-black h-16"></div>
                <div className="max-w-7xl mx-auto ">

                    <h1 className="text-5xl font-bold mb-24 mt-4 text-center">Get your<span className="text-[#378ae5]"> Trainers Here</span></h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-3 gap-4 pb-12">

                        {allTrainers.map((train) => (
                            <div key={train._id}>

                                <div class=" rounded  shadow-lg bg-white relative mb-16">
                                    <div className="h-16 w-full flex justify-center items-center">
                                        <Image
                                            width={130}
                                            height={130}
                                            className="rounded-full absolute -top-16  flex justify-center items-center"
                                            src={train.profile_image}
                                            alt="trainer image"
                                        />
                                    </div>
                                    <div class="px-6 py-4">
                                        <div className=" flex justify-center items-center gap-2 font-bold text-xl my-2">
                                            {train.name}

                                            {train.status === "active" ? (
                                                <svg
                                                    className="w-6 h-6 text-green-500"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="w-6 h-6 text-green-500 opacity-0"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                                                </svg>
                                            )}
                                        </div>
                                        <div className="text-center uppercase font-medium mb-5">{train.specialization}</div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate aliquam et magni. Autem inventore praesentium quis exercitationem. Atque, modi.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2 bg-[#04315b]">
                                        <div className="flex justify-center items-center gap-3 text-white">
                                            <Facebook></Facebook>
                                            <Twitter></Twitter>
                                            <Instagram></Instagram>
                                            <YouTube></YouTube>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>


            <Toaster />
        </PrivateRoute>
    );
};

export default Trainers2;
