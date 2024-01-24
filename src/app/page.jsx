import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Poster from "@/components/Poster/Poster";
import Services from "@/components/Services/Services";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

const page = () => {
    return (
        <div>
                <Banner />
                <Services />
                <FAQ></FAQ>
                <Advertisement />
                <Poster></Poster> 
        </div>
    )
}
export default page;