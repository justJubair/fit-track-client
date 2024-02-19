import axios from "axios";

export const getSingleUser = async(email)=>{
    const res = await axios(`https://fit-track-server.vercel.app/api/v1/singleuser?email=${email}`);
    
    return res.data
}