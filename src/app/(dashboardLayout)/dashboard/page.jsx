import { getAllServices } from "@/api/getAllServices";
import DashboardHome from "@/components/Dashboard/DashboardHome/DashboardHome";


const DashboardPage = async() => {
    const services = await getAllServices()
    return(
        <div>
            <DashboardHome services={services} />
        </div>
    )}
export default DashboardPage;