import React, { useEffect, useRef, useState } from "react";
import * as A from "../styles/SignupStyle";
import * as C from "../styles/CommonStyle";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import axiosInstance from "../api/axiosInstance";

function Signup() {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    password2: "",
    nationality: "",
    name: "",
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

  const UsableEmail = async (e) => {
    const email = formValue.email;

    try {
      const response = await axiosInstance.get("/api/auth/check-email", { email });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, password2, nationality, name } = formValue;

    // 중복 확인 진행이 안 됐을 경우

    // 입력을 다 하지 않았을 경우
    if (!email || !password || !password2 || !nationality || !name) {
      alert("입력하지 않은 내용이 있습니다.");
      return;
    }
    // 비밀번호가 다를 경우
    if (password !== password2) {
      alert("비밀번호가 다릅니다.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/api/auth/signup",
        {
          name,
          email,
          password,
          nationality,
        },
        {
          headers: {
            "Content-Type": "application/json", // JSON 요청 명시
          },
        }
      );

      const data = response.data;

      if (data) {
        console.log("회원가입 성공");
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.log(process.env.REACT_APP_BASE_API_URL);

      console.error("에러 발생:", error);
    }
  };

  // 국적 드롭다운
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return (
    <C.Common>
      <A.Signup>
        <A.Logo src={logo} />
        <A.RedText>회원가입</A.RedText>
        <A.InputBox>
          <A.Text>아이디(이메일)</A.Text>
          <A.InputDetailBox>
            <A.Input type="email" name="email" value={formValue.email} onChange={handleChange} />
            <A.UsableBtn onClick={UsableEmail}>중복확인</A.UsableBtn>
          </A.InputDetailBox>
          <A.SignupInfo>사용 가능한 이메일입니다.</A.SignupInfo>
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
            <A.Select name="nationality" value={formValue.nationality} onChange={handleChange}>
              <option value="">언어를 선택하세요</option>
              <option value="korea">한국어</option>
              <option value="america">English</option>
              {/* <option value="jp">日本語</option>
              <option value="zh">中文</option>
              <option value="fr">Français</option> */}
            </A.Select>
          </A.InputDetailBox>
        </A.InputBox>
        <A.InputBox>
          <A.Text>닉네임</A.Text>
          <A.InputDetailBox>
            <A.Input type="text" name="name" value={formValue.name} onChange={handleChange} placeholder="(필수)" />
            <A.UsableBtn>중복확인</A.UsableBtn>
          </A.InputDetailBox>
          <A.SignupInfo>사용 가능한 닉네임입니다.</A.SignupInfo>
        </A.InputBox>
        <A.Button onClick={handleSubmit}>가입하기</A.Button>
      </A.Signup>
    </C.Common>
  );
}

export default Signup;
