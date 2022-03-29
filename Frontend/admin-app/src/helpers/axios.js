import axios from "axios";
import { API } from "../urlConfig.js";

const axiosInstance = axios.create({
  baseURL: API,
  //   headers:{
  //       'Authorization':""
  //   }
});

export default axiosInstance;
