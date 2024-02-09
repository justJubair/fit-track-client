import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const submitHealthInfo = async (formData) => {
  try {
    const response = await axios.post(
      "https://fit-track-server.vercel.app/api/v1/healthinfo",
      formData
    );

    toast.success("HealthInfo submitted successfully", {
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
    toast.error("Error submitting HealthInfo. Please try again.", {
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

export default submitHealthInfo;
