import React, { useState, useRef } from "react";
import Forward from "../../assets/main/Forward.svg";
import pepper from "../../assets/main/pepper.png";
import graypepper from "../../assets/main/graypepper.svg";
import foward from "../../assets/Forward.svg";
import camera from "../../assets/main/Camera.png";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/WriteReviewStyle";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function WriteReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { foodId, foodName } = location.state || {};
  const token = sessionStorage.getItem("accessToken");

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSpicy, setSelectedSpicy] = useState(0);
  const [reviewContent, setReviewContent] = useState("");
const [nulimg , setNulimg ] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      const newFiles = [];
      for (let i = 0; i < files.length; i++) {
        newImages.push(URL.createObjectURL(files[i]));
        newFiles.push(files[i]);
      }
      setSelectedImages(newImages);
      setSelectedFiles(newFiles);
      setCurrentImageIndex(0);
    }
  };

  const handleSpicySelect = (level) => {
    setSelectedSpicy(level);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev < selectedImages.length - 1 ? prev + 1 : prev
    );
  };

  const sendReview = async () => {
    const userId = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("foodId", foodId);
    formData.append("userId", userId);
    formData.append("content", reviewContent);
    formData.append("spicyLevel", selectedSpicy);

    if (selectedFiles && selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        formData.append("image", file);
      });
    } else {
      formData.append("image",nulimg);
    }

    try {
      const response = await axios.post("/reviews", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        alert("리뷰 작성 완료!");
        navigate(-1);
      } else {
        throw new Error("리뷰 전송 실패");
      }
    } catch (error) {
      console.error("Error posting review:", error);
      alert("리뷰 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <C.Common>
      <A.Header>
        <img src={Forward} alt="뒤로가기" onClick={() => navigate(-1)} />
        <div className="name">리뷰 쓰기</div>
      </A.Header>

      <A.WriteReview>
        <div className="add_image">
          {selectedImages.length === 0 ? (
            <label htmlFor="upload">
              <img src={camera} alt="사진 업로드" />
            </label>
          ) : (
            <div
              className="carousel"
              onClick={() => fileInputRef.current.click()}
            >
              {selectedImages.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="carousel-button left"
                >
                  <img src={foward} alt="" />
                </button>
              )}
              <img
                src={selectedImages[currentImageIndex]}
                alt={`업로드된 이미지 ${currentImageIndex + 1}`}
                className="preview_main"
              />
              {selectedImages.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="carousel-button right"
                >
                  <img src={foward} alt="" />
                </button>
              )}
            </div>
          )}
          <input
            type="file"
            id="upload"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleImageUpload}
            ref={fileInputRef}
          />
        </div>

        <A.Spicy>
          {Array.from({ length: 5 }).map((_, index) => {
            const isSelected = selectedSpicy > index;
            return (
              <img
                key={index}
                src={isSelected ? pepper : graypepper}
                alt="매운맛 정도"
                onClick={() => handleSpicySelect(index + 1)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
              />
            );
          })}
        </A.Spicy>

        <div className="input foodname">
          <p>{foodName}</p>
        </div>
        <div className="input">
          <textarea
            placeholder="구매하신 상품에 대한 리뷰를 남겨주세요."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          ></textarea>
        </div>

        <A.Button onClick={sendReview}>작성하기</A.Button>
      </A.WriteReview>
    </C.Common>
  );
}

export default WriteReview;
