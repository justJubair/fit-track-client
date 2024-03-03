
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const getChallenges = async () => {
  try {
    const response = await axios.get("https://fit-track-server.vercel.app/api/v1/challenges");
    toast.success("challenges displayed");
    return response.data;
  } catch (error) {
    toast.error(`${error.message}`);
    throw error;
  }
};
export default getChallenges;
