import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/LoginStyle";
import * as C from "../styles/CommonStyle";
import logo from "../assets/logo.svg";
import google from "../assets/Google.svg";
import apple from "../assets/Apple.svg";

function Login() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    autoLogin: "false",
  });

  const handleChange = (e) => {
    setFormValue((prevValue) => {
      const { name, value } = e.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
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
        <A.Button>로그인하기</A.Button>
        <A.Text>회원가입하기</A.Text>
        {/* onClick={goSignup} */}

        <A.SocialLoginBox>
          <A.SocialLogin>
            <A.SocialImg src={google} />
          </A.SocialLogin>
          <A.SocialLogin>
            <A.SocialImg src={apple} />
          </A.SocialLogin>
        </A.SocialLoginBox>
      </A.Login>
    </C.Common>
  );
}

export default Login;
