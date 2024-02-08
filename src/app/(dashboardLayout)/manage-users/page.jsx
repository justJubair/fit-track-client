import { getAllUsers } from "@/api/getAllUsers";
import ManageUsers from "@/components/Dashboard/ManageUsers/ManageUsers";


const ManageUsersPage = async() => {
    const users = await getAllUsers()
    
    return(
        <div>
           <ManageUsers users={users}/>
        </div>
    )}
export default ManageUsersPage;