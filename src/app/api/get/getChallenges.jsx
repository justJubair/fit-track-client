import axios from "axios";
import { toast } from "react-toastify";
export const getChallenges = async () => {
  try {
    const response = await axios.get("https://fit-track-server.vercel.app/api/v1/challenges");
    toast.success("challenges displayed", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return response.data;
  } catch (error) {
    toast.error(`${error.message}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    throw error;
  }
};
export default getChallenges;
