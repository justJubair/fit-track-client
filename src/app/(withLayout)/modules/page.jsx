import UsersServices from "@/components/UsersServices/UsersServices";
import { getAllServices } from "@/api/getAllServices";


const Courses = async () => {
    const userServices = await getAllServices()
    
    return (
        <div>
            <UsersServices userServices={userServices}/>
        </div>
    );
};

export default Courses;