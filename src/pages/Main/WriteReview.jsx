import React, { useState } from "react";
import Forward from "../../assets/main/Forward.svg";
import pepper from "../../assets/main/pepper.png";
import camera from "../../assets/main/Camera.png";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/WriteReviewStyle";
import { useNavigate } from "react-router-dom";

function WriteReview() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedSpicy, setSelectedSpicy] = useState(0);


  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [...selectedImages];
      for (let i = 0; i < files.length; i++) {
        newImages.push(URL.createObjectURL(files[i]));
      }
      setSelectedImages(newImages);
    }
  };


  const handleSpicySelect = (level) => {
    setSelectedSpicy(level);
  };

  return (
    <C.Common>
      <A.Header>
        <img src={Forward} alt="" onClick={() => navigate(-1)} />
        <div className="name">리뷰 쓰기</div>
      </A.Header>

      <A.WriteReview>
 
        <div className="add_image">
          <label htmlFor="upload">
            {selectedImages.length === 0 ? (
              <img src={camera} alt="사진 업로드" />
            ) : (
              <img src={selectedImages[0]} alt="업로드된 대표 이미지" className="preview_main" />
            )}
          </label>
          <input 
            type="file" 
            id="upload" 
            accept="image/*" 
            multiple 
            style={{ display: "none" }} 
            onChange={handleImageUpload} 
          />
        </div>

        
        {selectedImages.length > 1 && (
          <div className="image_preview">
            {selectedImages.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`업로드된 이미지 ${index + 1}`} />
            ))}
          </div>
        )}

      
        <A.Spicy>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={pepper}
              alt="매운맛 정도"
              onClick={() => handleSpicySelect(index + 1)}
              style={{ transform: selectedSpicy > index ? "scale(1.5)" : "scale(1)" }}
            />
          ))}
        </A.Spicy>

        <div className="input">
          <textarea placeholder="구매하신 상품에 대한 리뷰를 남겨주세요."></textarea>
        </div>

        <A.Button>작성하기</A.Button>
      </A.WriteReview>
    </C.Common>
  );
}

export default WriteReview;
