'use client';
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./trainer.css"
import { ToastContainer, toast } from "react-toastify";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import PrivateRoute from "../Private/PrivateRoute";
import { useRouter } from "next/navigation";
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';

const Trainers = ({ allTrainers }) => {
    // console.log(allTrainers)

    const { data: session } = useSession();
    console.log(session)

    const router = useRouter();

    Notiflix.Notify.init({
        width: '300px',
        position: 'right-top',
        distance: '10px',
        opacity: 1,
        borderRadius: '5px',
        rtl: false,
        timeout: 2000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        plainText: true,
        showOnlyTheLastOne: true,
        ID: 'NotiflixNotify',
        className: 'notiflix-notify',
        zindex: 4001,
        fontFamily: 'Quicksand',
        fontSize: '18px',
        cssAnimation: true,
        cssAnimationDuration: 600,
        cssAnimationStyle: 'zoom',
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: 'shadow',
        fontAwesomeIconSize: '20px',
        success: {
            background: 'black',
            textColor: '#fff',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: '#378AE5',
            fontAwesomeClassName: 'fas fa-check-circle',
            fontAwesomeIconColor: '#378AE5',
            backOverlayColor: 'rgba(55, 118, 248, 0.8)',
        }, info: {
            background: '#378AE5',
            textColor: '#fff',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: 'white',
            fontAwesomeClassName: 'fas fa-check-circle',
            fontAwesomeIconColor: 'white',
            backOverlayColor: 'rgba(55, 118, 248, 0.8)',
        }
    });


    const [userData, setUserData] = useState([]);
    useEffect(() => {
        if (!session) {
            router.push('/')
        }
        if (session && session.user && session.user.email) {
            axios.get(`https://fit-track-server.vercel.app/api/v1/singleuser?email=${session.user.email}`)
                .then(res => { setUserData(res.data) })
        } else {
            router.push('/')
        }
    }, [router, session])
    const userId = userData._id;

    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const handleConnect = () => {
        toast.success('Connect request sent to trainer.')
    }

    const toggleModal = (trainerId) => {
        setSelectedTrainer(trainerId);
        document.body.classList.toggle("open-modal");
    };

    const handleShareReq = (temail) => {
        console.log(temail)
        const userDetails = {
            targetId: userId,
            userEmail: session.user.email,
            userName: userData.username,
            userImage: session.user.image ,
            requestStatus: 'pending',
            seenStatus: false
        }

        // console.log(userDetails)

        axios.post('http://localhost:5000/api/v1/postdatainuserfriendlist', { temail, userDetails })
            .then(res => {
                console.log(res);
                if (res.data === 'Request Sent') {
                    Notify.success('Request sent to this trainer!');
                    router.push('http://localhost:3000/trainers');
                }
            })
            .catch(error => {
                if (error.response.data === 'User already in friend list') {
                    Notify.info('Reqest already sent!')
                }
                console.error('Error updating user details:', error);
            });


    }


    return (
        <PrivateRoute>
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
                                                <Link href="#" >
                                                    <i ><Facebook></Facebook> </i>
                                                </Link>
                                                <Link href="#" >
                                                    <i ><Twitter></Twitter></i>
                                                </Link>
                                                <Link href="#" >
                                                    <i ><Instagram></Instagram></i>
                                                </Link>
                                                <Link href="#" >
                                                    <i className="fab fa-youtube"><YouTube></YouTube></i>
                                                </Link>
                                            </div>
                                            <div className="buttons">
                                                <button onClick={handleConnect} >Connect</button>
                                                <button onClick={() => toggleModal(train._id)}>Open Modal</button>

                                                <div className="modal-container" onClick={toggleModal}></div>

                                                {selectedTrainer && (
                                                    <div className="modal-window">
                                                        <h2>Email</h2>
                                                        <p>{allTrainers.find(trainer => trainer._id === selectedTrainer)?.email}</p>
                                                        <h2>Bio</h2>
                                                        <p>{allTrainers.find(trainer => trainer._id === selectedTrainer)?.bio}</p>
                                                        <button onClick={() => { handleShareReq(allTrainers.find(trainer => trainer._id === selectedTrainer)?.email) }} className="req-btn">Send hire request...</button>
                                                    </div>
                                                )}

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
        </PrivateRoute>
    );
};

export default Trainers;