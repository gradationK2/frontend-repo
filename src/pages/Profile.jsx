import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/ProfileStyle";
import * as C from "../styles/CommonStyle";
import basicImg from "../assets/basicImg.svg";
import forward from "../assets/Forward.svg";
import axiosInstance from "../api/axiosInstance";

function Profile() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    userId: "",
    name: "",
    nationality: "",
    profileImagePath: "",
  });

  useEffect(() => {
    const fetchFormValue = async () => {
      try {
        const response = await axiosInstance.get("/api/user/me");
        setFormValue(response.data);
        console.log("프로필 목록", response.data);
      } catch (error) {
        console.error("프로필 목록을 불러오는 중 오류 발생", error);
      }
    };

    fetchFormValue();
  }, []);

  const handleChange = (e) => {
    setFormValue((prevValue) => {
      const { name, value } = e.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

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

  const handleSubmit = async () => {
    console.log("보내는 데이터:", formValue);
    try {
      await axiosInstance.put("/api/user/me", formValue);
      alert("수정이 완료되었습니다.");
      navigate(-1);
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const goChangePW = () => {
    navigate("/ChangePw");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <C.Common>
      <A.Profile>
        <A.section>
          <A.Header>
            <A.Goback src={forward} onClick={goBack} />
            <A.Title>개인정보수정</A.Title>
          </A.Header>

          <A.ProfileBox>
            <A.Photo>
              <A.PhotoInput type="file" id="image_upload" accept="image/*" onChange={handleChange} />
              <A.PhotoLabel htmlFor="image_upload">
                <A.PhotoImg src={formValue.profile_photo || basicImg} />
              </A.PhotoLabel>
            </A.Photo>

            <A.SmallBtn>로그인</A.SmallBtn>
            <A.SmallBtn onClick={goChangePW}>비밀번호변경</A.SmallBtn>
          </A.ProfileBox>
        </A.section>

        <A.InputBox>
          <A.Text>이메일</A.Text>
          <A.Email>{formValue.email}</A.Email>
        </A.InputBox>
        <A.InputBox>
          <A.Text>닉네임</A.Text>
          <A.Input type="text" name="name" value={formValue.name} onChange={handleChange} />
        </A.InputBox>
        <A.InputBox>
          <A.Text>국적(언어)</A.Text>
          <A.InputDetailBox>
            <A.Select name="nationality" value={formValue.nationality} onChange={handleChange}>
              <option value="">언어를 선택하세요</option>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              {/* <option value="jp">日本語</option>
              <option value="zh">中文</option>
              <option value="fr">Français</option> */}
            </A.Select>
          </A.InputDetailBox>
        </A.InputBox>
        <A.Button onClick={handleSubmit}>완료</A.Button>
      </A.Profile>
    </C.Common>
  );
}

export default Profile;
