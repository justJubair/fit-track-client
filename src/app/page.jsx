import Advertisement from "@/components/Advertisement/Advertisement";
import AiChatbot from "@/components/AiChatbot/AiChatbot";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Poster from "@/components/Poster/Poster";
import Services from "@/components/Services/Services";
import Nav from "@/components/Shared/Nav/Nav";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Services />
            <FAQ></FAQ>
            <Advertisement />
            <Poster></Poster>
            <AiChatbot/>
        </div>
    )
}
export default HomePage;