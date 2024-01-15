import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Nav from "@/components/Shared/Nav/Nav";


const page = () => {
    return (
        <div>
           <Nav/>
         <Banner></Banner>
         <FAQ></FAQ>
        </div>
    )
}
export default page;