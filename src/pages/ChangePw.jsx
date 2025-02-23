import React, { useState } from "react";
import * as A from "../styles/ChangePwStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import { useNavigate } from "react-router-dom";

function ChangePw() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    password: "",
    newpassword: "",
    newpassword2: "",
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
          <A.Input type="password" name="password" value={formValue.email} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>새 비밀번호</A.Text>
          <A.Input type="password" name="newpassword" value={formValue.email} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>비밀번호 확인</A.Text>
          <A.Input type="password" name="newpassword2" value={formValue.email} onChange={handleChange} />
        </A.InputBox>
        <A.Button>비밀번호 변경하기</A.Button>
      </A.ChangePw>
    </C.Common>
  );
}

export default ChangePw;
