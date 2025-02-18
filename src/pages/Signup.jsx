import React, { useState } from "react";
import * as A from "../styles/SignupStyle";
import * as C from "../styles/CommonStyle";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function Signup() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    password2: "",
    language: "",
    nickname: "",
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
      <A.Signup>
        <A.Logo src={logo} />
        <A.RedText>회원가입</A.RedText>
        <A.InputBox>
          <A.Text>아이디(이메일)</A.Text>
          <A.InputDetailBox>
            <A.Input type="email" name="email" value={formValue.email} onChange={handleChange} />
            <A.UsableBtn>중복확인</A.UsableBtn>
          </A.InputDetailBox>
        </A.InputBox>
        <A.InputBox>
          <A.Text>비밀번호</A.Text>
          <A.InputDetailBox>
            <A.Input type="password" name="password" value={formValue.password} onChange={handleChange} />
          </A.InputDetailBox>
        </A.InputBox>
        <A.InputBox>
          <A.Text>비밀번호 확인</A.Text>
          <A.InputDetailBox>
            <A.Input type="password" name="password2" value={formValue.password2} onChange={handleChange} />
          </A.InputDetailBox>
        </A.InputBox>
        <A.InputBox>
          <A.Text>국적(언어)</A.Text>
          <A.InputDetailBox>
            <A.Input type="text" name="language" value={formValue.language} onChange={handleChange} />
          </A.InputDetailBox>
        </A.InputBox>
        <A.InputBox>
          <A.Text>닉네임</A.Text>
          <A.InputDetailBox>
            <A.Input type="text" name="nickname" value={formValue.nickname} onChange={handleChange} placeholder="(필수)" />
            <A.UsableBtn>중복확인</A.UsableBtn>
          </A.InputDetailBox>
        </A.InputBox>
        <A.Button>가입하기</A.Button>
      </A.Signup>
    </C.Common>
  );
}

export default Signup;
