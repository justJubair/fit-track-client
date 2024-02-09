export const getAllPayments = async()=>{
    const res = await fetch("https://raw.githubusercontent.com/justJubair/fit-track-client/dashboard-jubair/public/payments.json?token=GHSAT0AAAAAACJ2ZZJAAZ3PU6K3RCQIX7JKZODEOVQ")
    return res.json()
}