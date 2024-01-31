"use client"

import { ToastContainer } from "react-toastify";
import Advertisement from "../Advertisement/Advertisement";
import AiChatbot from "../AiChatbot/AiChatbot";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Poster from "../Poster/Poster";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";

const Home = () => {
    return(
        <div>
           <Nav />
            <Banner />
            <Services />
            <Advertisement />
            <Poster/>
            <FAQ/>
            <AiChatbot />
            <Footer />
            <ToastContainer />
        </div>
    )}
export default Home;