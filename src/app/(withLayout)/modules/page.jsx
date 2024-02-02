import UsersServices from "@/components/UsersServices/UsersServices";
import { getServices } from "@/utils/getServices";

const Courses = async () => {
    const userServices = await getServices()
    
    return (
        <div>
            <UsersServices userServices={userServices}/>
        </div>
    );
};

export default Courses;