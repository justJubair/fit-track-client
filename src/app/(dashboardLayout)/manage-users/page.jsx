import ManageUsers from "@/components/Dashboard/ManageUsers/ManageUsers";
import { getAllUsers } from "@/utils/getAllUsers";

const ManageUsersPage = async() => {
    const users = await getAllUsers()
    
    return(
        <div>
           <ManageUsers users={users}/>
        </div>
    )}
export default ManageUsersPage;