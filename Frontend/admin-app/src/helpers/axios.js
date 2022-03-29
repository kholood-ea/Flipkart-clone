import axios from "axios";
import * as data from "../urlConfig.Json";

const axiosInstance = axios.create({
  baseURL: data.api,
  //   headers:{
  //       'Authorization':""
  //   }
});

export default axiosInstance;
