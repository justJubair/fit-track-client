export const getAllUsers = async()=>{
    const res = await fetch("https://fit-track-server.vercel.app/api/v1/users")
    return res.json()
}