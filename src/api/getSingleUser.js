export const getSingleUser = async(email)=>{
    const res = await fetch(`https://fit-track-server.vercel.app/api/v1/singleuser?email=${email}`)
    return res.json()
}