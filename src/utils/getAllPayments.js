export const getAllPayments = async()=>{
    const res = await fetch("payments.json")
    return res.json()
}