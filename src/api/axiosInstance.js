import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청마다 토큰을 자동 추가하는 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 403) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const response = await axiosInstance.post("/api/auth/refresh", {
            refreshToken: refreshToken,
          });

          // 새로운 accessToken 저장
          const newAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);

          // 새로운 refreshToken 저장
          const newRefreshToken = response.data.refreshToken;
          localStorage.setItem("refreshToken", newRefreshToken);

          // 요청 다시 시도
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // 요청 보내기
          return axiosInstance(error.config);
        } catch (refreshTokenError) {
          console.log("💥refreshToken으로 토큰 갱신 실패: ", refreshTokenError);

          // refreshToken도 만료된 경우, 사용자에게 재로그인 요청
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
