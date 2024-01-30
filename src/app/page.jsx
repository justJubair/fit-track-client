import Advertisement from "@/components/Advertisement/Advertisement";
import AiChatbot from "@/components/AiChatbot/AiChatbot";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Poster from "@/components/Poster/Poster";
import Services from "./services/page";
import Footer from "@/components/Shared/Footer/Footer";
import Nav from "@/components/Shared/Nav/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Services />
            <Advertisement />
            <Poster></Poster>
            <FAQ></FAQ>
            <AiChatbot />
            <Footer />
            <ToastContainer />
        </div>
    )
}
export default HomePage;