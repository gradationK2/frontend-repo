import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/LoginStyle";
import * as C from "../styles/CommonStyle";
import logo from "../assets/logo.svg";
import google from "../assets/Google.svg";
import apple from "../assets/Apple.svg";
import axiosInstance from "../api/axiosInstance";

function Login() {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value, // 체크박스일 경우 checked 값 사용
    }));
  };

  const handleSubmit = async () => {
    const { email, password, autoLogin } = formValue;

    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/api/auth/login",
        { email, password },
        {
          withCredentials: true, // 쿠키 포함 여부
        }
      );

      //성공 시 토큰 발급
      const token = response.data;
      console.log(response);

      if (token) {
        console.log("로그인 성공");
        localStorage.setItem("accessToken", token.accessToken);

        if (autoLogin) {
          localStorage.setItem("refreshToken", token.refreshToken); // 자동 로그인 체크 시 localStorage에 저장
          localStorage.setItem("accessToken", token.accessToken);
          console.log(localStorage.getItem);
        } else {
          sessionStorage.setItem("refreshToken", token.refreshToken);
          sessionStorage.setItem("accessToken", token.accessToken); // 일반 로그인 시 sessionStorage에 저장
        }

        navigate("/main");
      } else {
        console.log("로그인에 실패했습니다");
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  const goSignup = () => {
    navigate("/signup");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://www.asd1.store/oauth2/authorization/google";
  };

  return (
    <C.Common>
      <A.Login>
        <A.Logo src={logo} />
        <A.InputBox>
          <A.Text>아이디(이메일)</A.Text>
          <A.Input type="email" name="email" value={formValue.email} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>비밀번호</A.Text>
          <A.Input type="password" name="password" value={formValue.password} onChange={handleChange} />
        </A.InputBox>
        <A.CheckBox>
          <A.Check type="checkbox" name="autoLogin" value={formValue.autoLogin} onChange={handleChange} />
          <A.Text>자동 로그인</A.Text>
        </A.CheckBox>
        <A.Button onClick={handleSubmit}>로그인하기</A.Button>
        <A.goSignup onClick={goSignup}>회원가입하기</A.goSignup>

        <A.SocialLoginBox>
          <A.SocialLogin onClick={handleGoogleLogin}>
            <A.SocialImg src={google} />
          </A.SocialLogin>
        </A.SocialLoginBox>
      </A.Login>
    </C.Common>
  );
}

export default Login;
