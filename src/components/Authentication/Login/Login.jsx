/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaFacebook, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./SignUp.css"
import { useRouter } from 'next/navigation';
import { useSession, signIn } from "next-auth/react"
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import { toast } from 'react-toastify';
import { Typography } from "@mui/material";
const Login = () => {
    const [isRegisterActive, setRegisterActive] = useState(false);
    const [userData, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const notify = () => toast("Logged In!");
    const notify2 = () => toast("Registration successful!");


    const handleRegisterClick = () => {
        setRegisterActive(true);
    };

    const handleLoginClick = () => {
        setRegisterActive(false);
        const wrapper = document.querySelector(".wrapper");
        wrapper.classList.remove("active");
    };

    const router = useRouter();
    const { data: session } = useSession();

    //  this is login in section

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        const res = await signIn('credentials', {
            email: email,
            password: password,
        })
        notify();
    }
    // this is signUp in section

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const name = e.target.name;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handelSignUp = async (e) => {
        e.preventDefault(0);
        setErrorMessage('')
        const res = await fetch('/api/user-credential', {
            method: 'POST',
            body: JSON.stringify({ userData }),
            'content-type': 'application/json',
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
        } else {
            Notify.success('Registration Successful!')
            router.refresh();
            setTimeout(function () {
                router.push('/')
            }, 2000);
        }
    }

    // this is Google SingUp
    const handleSignUpGoogle = () => {
        signIn('google')
    }

    // This is FacbookLogin
    const handleSignUpFacebook = () => {
        signIn('facebook')
    }
    useEffect(() => {
        if (session) {
            setTimeout(function () {
                router.push('/')
            }, 2000);
        }
    }, [session, router])



    Notiflix.Notify.init({
        width: '300px',
        position: 'right-top',
        distance: '10px',
        opacity: 1,
        borderRadius: '5px',
        rtl: false,
        timeout: 2000,
        messageMaxLength: 110,
        backOverlay: true,
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
        }
    });


    if (session) {
        Notify.success('Logged In!')
        setTimeout(function () {
            router.push('/')
        }, 2000);
    }
    
    return (
        <div className="main">
            <div className={`wrapper ${isRegisterActive ? "active" : ""} w-[300px]  md:w-[700px]   lg:w-[800px] h-[570px] `}>
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>
                <div className="form-box login w-full md:w-[50%] h-full grid justify-center items-center">

                    <form onSubmit={(e) => handleSubmit(e)} className="" >
                        <h2 className="animation " style={{ "--i": 0, "--j": 21 }}>
                            Login
                        </h2>
                        <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
                            <input type="text" name="email" required />
                            <label>Email</label>
                            <span className="icon">
                                {" "}
                                <MdEmail />
                            </span>
                        </div>
                        <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
                            <input type="text" name="password" required />
                            <label>Password</label>
                            <span className="icon">
                                <FaLock />
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="btn animation"
                            style={{ "--i": 3, "--j": 24 }}
                        >
                            Login
                        </button>
                        <div
                            className="logreg-link animation"
                            style={{ "--i": 4, "--j": 25 }}
                        >
                     
                        </div>
                        <div className="social-accounts animation" style={{ "--i": 5, "--j": 26 }}>
                            <h3 className="social-text">Or</h3>
                            <div className="social-icons">

                                <button className="social-icon" onClick={() => handleSignUpGoogle()}>
                                    <FaGoogle />
                                </button>

                                <button className="social-icon" onClick={() => handleSignUpFacebook()}>
                                    <FaFacebook />
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="info-text login hidden md:flex ">
                    <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
                        Login and Explore.
                    </h2>
                    <p className="animation" style={{ "--i": 1, "--j": 21 }}>
                        Welcome back! Log in now to continue your fitness adventure.
                    </p>
                </div>

                {/* this is register code  */}

                <div className="form-box register w-full md:w-[50%] ">
                    <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
                        Sign Up
                    </h2>
                    <form onSubmit={handelSignUp}>
                        <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="username"
                                required />
                            <label>Name</label>
                            <span className="icon">
                                {" "}
                                <FaUser />
                            </span>
                        </div>
                        <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="email"
                                required />
                            <label>Email</label>
                            <span className="icon">
                                {" "}
                                <MdEmail />
                            </span>
                        </div>
                        <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="userimage"
                                required />
                            <label>imagUrl</label>
                            {/* <span className="icon">
                                {" "}
                                <MdEmail />
                            </span> */}
                        </div>

                        <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                required />
                            <label>Password</label>
                            <span className="icon">
                                <FaLock />
                            </span>

                        </div>

                        {/* Image input */}
                        <div className="animation img-upload" style={{ "--i": 21, "--j": 4 }}>


                            {/* <input type="file" required className="upload-box" /> */}
                        </div>


                        <button
                            type="submit"
                            className="btn animation"
                            style={{ "--i": 21, "--j": 4 }}
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* show error */}

                    {errorMessage && <Typography component="h6" variant="h6" sx={{ fontSize: '1rem', color: 'red', fontWeight: '400', textAlign: 'start', marginTop: '10px' }}>
                        {errorMessage}
                    </Typography>}

                    <div
                        className="logreg-link animation"
                        style={{ "--i": 22, "--j": 5 }}
                    >
                     
                    </div>
                    <div className="social-accounts animation" style={{ "--i": 23, "--j": 6 }}>
                        <h3 className="social-text">Or</h3>
                        <div className="social-icons">

                            <button className="social-icon" onClick={() => handleSignUpGoogle()}>
                                <FaGoogle />
                            </button>

                            <button className="social-icon" onClick={() => handleSignUpFacebook()}>
                                <FaFacebook />
                            </button>

                        </div>
                    </div>

                </div>
                <div className="info-text register hidden md:flex">

                    <h2 className="animation" style={{ "--i": 17, "--j": 1 }}>
                        Sign Up Today.
                    </h2>
                    <p className="animation" style={{ "--i": 18, "--j": 2 }}>
                        Join for personalized fitness. Start your journey to a healthier
                        lifestyle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;