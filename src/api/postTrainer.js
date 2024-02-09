import axios from "axios"

export const postTrainer = async(trainer)=>{
    const res = await axios.post("https://fit-track-server.vercel.app/api/v1/trainers", trainer)
    return res.data
}