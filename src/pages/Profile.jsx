import React, { useState } from "react";
import * as A from "../styles/ProfileStyle";
import * as C from "../styles/CommonStyle";
import basicImg from "../assets/basicImg.svg";
import forward from "../assets/Forward.svg";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    nickname: "",
    language: "",
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
      <A.Profile>
        <A.section>
          <A.Header>
            <A.Goback src={forward} />
            <A.Title>개인정보수정</A.Title>
          </A.Header>
          <A.ProfileBox>
            <A.Photo src={basicImg} />
            <A.SmallBtn>로그인</A.SmallBtn>
            <A.SmallBtn>비밀번호변경</A.SmallBtn>
          </A.ProfileBox>
        </A.section>
        <A.InputBox>
          <A.Text>이메일</A.Text>
          <A.Input type="email" name="email" value={formValue.email} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>닉네임</A.Text>
          <A.Input type="text" name="nickname" value={formValue.nickname} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>국적(언어)</A.Text>
          <A.Input type="text" name="language" value={formValue.language} onChange={handleChange} />
        </A.InputBox>
        <A.Button>완료</A.Button>
      </A.Profile>
    </C.Common>
  );
}

export default Profile;
