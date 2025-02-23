import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token); // 자동 로그인 시 localStorage에 저장
      navigate("/main");
    } else {
      alert("로그인 실패!");
      navigate("/login");
    }
  }, [navigate]);

  return <div>로그인 중...</div>;
}

export default GoogleCallback;
