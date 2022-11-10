import axios from "axios";
import { API } from "../urlConfig.js";

const token = window.localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    // "Content-Type": "multipart/form-data",
    accept: "*/*",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosInstance;
