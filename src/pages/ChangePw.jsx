import React, { useState } from "react";
import * as A from "../styles/ChangePwStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function ChangePw() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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

  const handleSubmit = async () => {
    const { currentPassword, newPassword, confirmPassword } = formValue;

    try {
      const response = await axiosInstance.put(
        "/api/user/password",
        { currentPassword, newPassword, confirmPassword },
        {
          withCredentials: true, // 쿠키 포함 여부
        }
      );
      console.log("1", response);

      if (response.data) {
        alert(response.data);
        navigate(-1);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <C.Common>
      <A.ChangePw>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>개인정보수정</A.Title>
        </A.Header>
        <A.InputBox>
          <A.Text>기존 비밀번호</A.Text>
          <A.Input type="password" name="currentPassword" value={formValue.currentPassword} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>새 비밀번호</A.Text>
          <A.Input type="password" name="newPassword" value={formValue.newPassword} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>비밀번호 확인</A.Text>
          <A.Input type="password" name="confirmPassword" value={formValue.confirmPassword} onChange={handleChange} />
        </A.InputBox>
        <A.Button onClick={handleSubmit}>비밀번호 변경하기</A.Button>
      </A.ChangePw>
    </C.Common>
  );
}

export default ChangePw;
