import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StartStyle";
import logo from "../assets/logo.svg";
import * as C from "../styles/CommonStyle";

function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <C.Common>
      <A.Start>
        <A.Img src={logo} />
      </A.Start>
    </C.Common>
  );
}

export default Start;
