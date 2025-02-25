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
    name: "",
    nationality: "",
    profileImageFile: "",
  });

  useEffect(() => {
    const fetchFormValue = async () => {
      try {
        const response = await axiosInstance.get("/api/user/me");
        setFormValue({
          ...response.data,
          image: response.data.profileImagePath || "", // 서버에서 받은 이미지 경로를 image에 저장
        });
        console.log("프로필", response.data);
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

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValue((prev) => ({
          ...prev,
          image: reader.result, // 미리보기용 Base64 URL
          profileImageFile: file, // 파일 객체 저장 (업로드용)
        }));
      };
      reader.readAsDataURL(file); // Base64 변환
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("nationality", formValue.nationality);

    if (formValue.profileImageFile) {
      formData.append("image", formValue.profileImageFile);
      console.log("파일 타입 확인:", formValue.profileImageFile);
    }

    console.log("보낼 데이터 확인:", formData.get("name"), formData.get("nationality"), formData.get("image"));

    try {
      const response = await axiosInstance.put("/api/user/me", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("업로드 성공!", response.data);

      setFormValue((prev) => ({
        ...prev,
        image: response.data.profileImagePath || prev.image, // 서버에서 받은 이미지 경로 업데이트
        profileImageFile: null,
      }));

      alert("수정이 완료되었습니다.");
      navigate(-1);
    } catch (error) {
      console.error("에러 발생:", error.response ? error.response.data : error);
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
              <A.PhotoInput type="file" id="image_upload" accept="image/*" onChange={handleImgChange} />
              <A.PhotoLabel htmlFor="image_upload">
                <A.PhotoImg src={formValue.image || basicImg} />
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
              <A.Option value="">언어를 선택하세요</A.Option>
              <A.Option value="ko">한국어</A.Option>
              <A.Option value="en">English</A.Option>
            </A.Select>
          </A.InputDetailBox>
        </A.InputBox>
        <A.Button onClick={handleSubmit}>완료</A.Button>
      </A.Profile>
    </C.Common>
  );
}

export default Profile;
