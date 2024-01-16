import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Services from "@/components/Services/Services";

const page = () => {
    return (
        <div>
            <Banner></Banner>
            <Services />
            <Advertisement />
            <FAQ></FAQ>
        </div>
    )
}
export default page;