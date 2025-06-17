import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://taskduty-backend-der9.onrender.com/",
});
