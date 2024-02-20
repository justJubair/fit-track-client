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
const SingUp2 = () => {
    const [isRegisterActive, setRegisterActive] = useState(false);
    const notify = () => toast("Logged In!");

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })

        // const res = await signIn('credentials', {
        //     email: email,
        //     password: password,
        // })
        // notify();
    }
    const handleSignUpGoogle = () => {
        console.log("click");
        signIn('google')
        if (session) {
            router.push('/')
        }
    }
    const handleSignUpFacebook = () => {
        console.log("click");
        signIn('facebook')
        if (session) {
            router.push('/')
        }
    }
    useEffect(() => {
        if (session) {
            setTimeout(function () {
                router.push('/')
            }, 2000);
        }
    }, [session, router])

    return (
        <div className={`wrapper ${isRegisterActive ? "active" : ""} w-[300px] md:w-[700px]   lg:w-[800px] md:h-[550px] h-[450px]`}>
            <span className="bg-animate"></span>
            <span className="bg-animate2"></span>
            <div className="form-box login w-full md:w-[50%] h-full md:grid justify-center items-center">

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
                        <p>
                            {isRegisterActive
                                ? "Already have an account? "
                                : "Don't have an account? "}
                            <a
                                href="#"
                                className="register-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRegisterClick();
                                }}
                            >
                                {isRegisterActive ? "Login" : "Sign Up"}
                            </a>
                        </p>
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
            <div className="form-box register w-full md:w-[50%] ">
                <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
                    Sign Up
                </h2>
                <form action="#">
                    <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
                        <input type="text" required />
                        <label>Name</label>
                        <span className="icon">
                            {" "}
                            <FaUser />
                        </span>
                    </div>
                    <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
                        <input type="text" required />
                        <label>Email</label>
                        <span className="icon">
                            {" "}
                            <MdEmail />
                        </span>
                    </div>

                    <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
                        <input type="text" required />
                        <label>Password</label>
                        <span className="icon">
                            <FaLock />
                        </span>
                    </div>
                    {/* Image input */}
                    <div className="animation img-upload" style={{ "--i": 21, "--j": 4 }}>
                        <input type="file" required className="upload-box" />

                    </div>

                    <button
                        type="submit"
                        className="btn animation"
                        style={{ "--i": 21, "--j": 4 }}
                    >
                        Sign Up
                    </button>
                    <div
                        className="logreg-link animation"
                        style={{ "--i": 22, "--j": 5 }}
                    >
                        <p>
                            {isRegisterActive
                                ? "Already have an account? "
                                : "Don't have an account? "}
                            <a
                                href="#"
                                className="register-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLoginClick();
                                }}
                            >
                                {isRegisterActive ? "Login" : "Sign Up"}
                            </a>
                        </p>
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
                </form>
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
    );
};

export default SingUp2;
