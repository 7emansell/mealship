import axios from "axios";

export default axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});
