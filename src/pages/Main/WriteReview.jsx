import React, { useState } from "react";
import Forward from "../../assets/main/Forward.svg";
import pepper from "../../assets/main/pepper.png";
import graypepper from "../../assets/main/graypepper.svg";
import foward from "../../assets/Forward.svg";
import camera from "../../assets/main/Camera.png";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/WriteReviewStyle";
import { useNavigate, useLocation } from "react-router-dom";

function WriteReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { foodId, foodName } = location.state || {};

  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSpicy, setSelectedSpicy] = useState(0);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        newImages.push(URL.createObjectURL(files[i]));
      }
      setSelectedImages(newImages);
      setCurrentImageIndex(0);
    }
  };

  const handleSpicySelect = (level) => {
    setSelectedSpicy(level);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < selectedImages.length - 1 ? prev + 1 : prev
    );
  };

  const sendReview = () => {
    alert('리뷰 작성 완료!')
    navigate(-1);
  }

  return (
    <C.Common>
      <A.Header>
        <img src={Forward} alt="" onClick={() => navigate(-1)} />
        <div className="name">리뷰 쓰기</div>
      </A.Header>

      <A.WriteReview>
        <div className="add_image">
          {selectedImages.length === 0 ? (
            <label htmlFor="upload">
              <img src={camera} alt="사진 업로드" />
            </label>
          ) : (
            <div className="carousel">
              {selectedImages.length > 1 && (
                <button onClick={handlePrevImage} className="carousel-button left">
                 <img src={foward} alt="" />
                </button>
              )}
              <img
                src={selectedImages[currentImageIndex]}
                alt={`업로드된 이미지 ${currentImageIndex + 1}`}
                className="preview_main"
              />
              {selectedImages.length > 1 && (
                <button onClick={handleNextImage} className="carousel-button right">
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
          <textarea placeholder="구매하신 상품에 대한 리뷰를 남겨주세요."></textarea>
        </div>

        <A.Button onClick={() => sendReview()}>작성하기</A.Button>
      </A.WriteReview>
    </C.Common>
  );
}

export default WriteReview;
