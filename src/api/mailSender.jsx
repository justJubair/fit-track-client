import { toast } from "react-toastify";

const axios = require("axios");

const sendMail = async (email, subject, message) => {
  try {
    const response = await axios.get("https://fit-track-server.vercel.app/api/v1/email", {
      params: {
        email,
        subject,
        message,
      },
    });
    if (response.status === 200) {
      toast.success("Registration successfull, check email.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Unexpected response:", response, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  } catch (error) {
    toast.error(error, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    
  }
};

export default sendMail;
