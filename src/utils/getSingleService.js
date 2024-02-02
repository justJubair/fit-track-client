export const getSingleService = async(_id)=>{
    const res = await fetch(`http://localhost:5000/api/v1/service/${_id}`)
    return res.json()
}