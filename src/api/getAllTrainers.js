import axios from "axios";

export const getAllTrainers = async () => {
  const res = await axios.get("https://fit-track-server.vercel.app/api/v1/trainers");
  return res.data;
};
