import { getAllPayments } from "@/utils/getAllPayments";

const ManagePaymentsPage = async() => {
    const payments = await getAllPayments()
    console.log(payments)
    return(
        <div>
            <ManagePaymentsPage/>
        </div>
    )}
export default ManagePaymentsPage;