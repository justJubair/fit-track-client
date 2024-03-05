import toast, { Toaster } from 'react-hot-toast';

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
      toast.success('Look at my styles.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
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
