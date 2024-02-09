import axios from "axios"

export const postTrainer = async(trainer)=>{
    const res = await axios.post("http://localhost:5000/api/v1/trainers", trainer)
    return res.data
}