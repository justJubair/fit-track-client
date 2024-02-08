import axios from "axios";

export const getAllTrainers = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/trainers");
  return res.data;
};
