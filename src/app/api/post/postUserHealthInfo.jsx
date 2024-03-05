
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const submitHealthInfo = async (formData) => {
  try {
    const response = await axios.post(
      "https://fit-track-server.vercel.app/api/v1/healthinfo",
      formData
    );

    toast.success("HealthInfo submitted successfully");

    return response.data;
  } catch (error) {
    toast.error("Error submitting HealthInfo. Please try again.");

    throw error;
  }
};

export default submitHealthInfo;
