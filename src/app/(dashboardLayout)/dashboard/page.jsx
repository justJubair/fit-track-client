import { getAllChallenges } from "@/api/getAllChallenges";
import { getAllServices } from "@/api/getAllServices";
import { getAllUsers } from "@/api/getAllUsers";
import DashboardHome from "@/components/Dashboard/DashboardHome/DashboardHome";


const DashboardPage = async() => {
    const services = await getAllServices()
    const challenges = await getAllChallenges()
   
  
    return(
        <div>
            <DashboardHome services={services} challenges={challenges} />
        </div>
    )}
export default DashboardPage;