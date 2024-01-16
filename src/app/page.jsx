import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Services from "@/components/Services/Services";

const page = () => {
    return (
        <div>
            <Banner></Banner>
            <Services/>
            <FAQ></FAQ>
        </div>
    )
}
export default page;