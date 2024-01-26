import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const submitHealthInfo = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/healthinfo",
      formData
    );

    toast.success("HealthInfo submitted successfully", { autoClose: 2000 });

    return response.data;
  } catch (error) {
    toast.error("Error submitting HealthInfo. Please try again.", {
      autoClose: 2000,
    });

    throw error;
  }
};

export default submitHealthInfo;
