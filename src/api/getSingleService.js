export const getSingleService = async(_id)=>{
    const res = await fetch(`https://fit-track-server.vercel.app/api/v1/service/${_id}`)
    return res.json()
}