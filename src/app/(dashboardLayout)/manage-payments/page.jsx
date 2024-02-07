import ManagePayments from "@/components/Dashboard/ManagePayments/ManagePayments";
import { getAllPayments } from "@/utils/getAllPayments";

const ManagePaymentsPage = async() => {
    const payments = await getAllPayments()
    
    return(
        <div>
            <ManagePayments payments={payments}/>
        </div>
    )}
export default ManagePaymentsPage;