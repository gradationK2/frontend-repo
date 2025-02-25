import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");

    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      console.log("소셜 로그인 성공, 토큰 저장 완료");

      // 1초 후 메인 화면으로 이동
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    } else {
      alert("로그인 실패!");
      navigate("/login-failed");
    }
  }, [navigate]);

  return <div>로그인 중... 잠시만 기다려 주세요.</div>;
}

export default LoginSuccess;
