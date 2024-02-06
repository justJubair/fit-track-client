import UsersServices from "@/components/UsersServices/UsersServices";
import { getAllServices } from "@/utils/getAllServices";


const Courses = async () => {
    const userServices = await getAllServices()
    
    return (
        <div>
            <UsersServices/>
        </div>
    );
};

export default Courses;