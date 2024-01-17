import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Poster from "@/components/Poster/Poster";
import Services from "@/components/Services/Services";

const page = () => {
    return (
        <div>
            <Banner/>
            <Services />
            <Advertisement />
            <FAQ></FAQ>
            <Poster></Poster>
        </div>
    )
}
export default page;