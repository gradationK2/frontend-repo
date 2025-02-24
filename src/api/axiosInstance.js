import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_API_URL;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
// 요청마다 토큰을 자동 추가하는 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
      console.log(config.headers.Authorization);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
