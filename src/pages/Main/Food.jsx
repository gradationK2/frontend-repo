import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/FoodStyle";
import test from "../../assets/main/dummy.png";
import empty_heart from "../../assets/main/empty_heart.png";
import heart from "../../assets/main/fullheart.svg";
import pepper from "../../assets/main/pepper.png";
import hot from "../../assets/main/spicy.png";
import littlehot from "../../assets/main/little_spicy.png";
import nothot from "../../assets/main/not_spicy.png";
import tabasco from "../../assets/main/tabasco.png";
import ad from "../../assets/main/ad.png";
import line from "../../assets/main/line.svg";
import profil from "../../assets/main/test_profil.svg";
import Header from "./Header";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

function Food() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [foodDetail, setFoodDetail] = useState({});
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/food/detail/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setFoodDetail(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("음식 상세 데이터를 가져오는 중 오류 발생:", error);
      });
  }, [id]);

  const goReviews = () => {
    navigate(`/review/${id}`, { state: { foodId: foodDetail.id } });
  };

  const goWriteReview = () => {
    navigate(`/writeReview/${id}`, { state: { foodId: id, foodName: foodDetail.name } });
  };

  const handleLikeToggle = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      alert("로그인 후 이용해주세요.");
      return;
    }
    axios
      .post(
        "/users/heart",
        { food_id: foodDetail.id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setLiked((prev) => !prev);
      })
      .catch((error) => {
        console.error("좋아요 요청 실패:", error);
      });
  };

  // 매운맛 이미지 선택
  const getSpicyImage = () => {
    switch (foodDetail.spicyLevelText) {
      case "안 매움":
        return nothot;
      case "약간 매움":
        return littlehot;
      case "매움":
        return hot;
      default:
        return hot; // 기본값은 hot
    }
  };

  // danger 텍스트 변경
  const getSpicyDangerText = () => {
    switch (foodDetail.spicyLevelText) {
      case "안 매움":
        return "맵지 않아요!";
      case "약간 매움":
        return "조금 매워요.";
      case "매움":
        return "매운 편이에요!";
      default:
        return "매운 정도 정보 없음";
    }
  };

  return (
    <C.Common>
      <Header />
      <A.Food>
        <div className="bg">
          <img src={foodDetail.imgUrl || test} alt={foodDetail.name} />
        </div>
        <A.Info>
          <A.FoodTitle className="food-title">
            <div className="circle"></div>
            <div className="name">{foodDetail.name}</div>
          </A.FoodTitle>
          <div className="detail_info">{foodDetail.description || "Delicious spicy ramen"}</div>

          <A.Heart onClick={handleLikeToggle}>
            <img src={liked ? heart : empty_heart} alt="like" />
            <p className="sum">{foodDetail.heartSize || "0"}</p>
          </A.Heart>
        </A.Info>
        <A.Detail>
          <div className="sections">
            <A.Section>
              <div className="title">사람들의 입맛</div>
              <div className="bg">
                <img src={getSpicyImage()} alt="spicy level" />
              </div>
              <div className="comment">
                <p>{foodDetail.spicyLevelText || "매운 정도 정보 없음"}</p>
              </div>
            </A.Section>
            <A.Section>
              <div className="title">스코빌 지수 기준</div>
              <div className="bg">
                <img src={tabasco} alt="tabasco" />
              </div>
              <div className="comment">
                {foodDetail.spicinessComparison || "매운맛 비교 정보 없음"}
              </div>
            </A.Section>
          </div>
          <img src={line} alt="line" className="line" />
          <div className="comment">
            *스코빌 지수(Scoville Heat Unit, SHU)는 미국에서 개발된 매운맛 측정 기준
          </div>
          <div className="danger">{getSpicyDangerText()}</div>
        </A.Detail>
        <A.Reviews>
          <div className="title">
            <p>
              Review {foodDetail.reviews?.length || 0}
              <span className="add" onClick={goWriteReview}>
                +
              </span>
            </p>
            <div className="btn" onClick={goReviews}>
              View all <span>&gt;</span>
              <div className="line"></div>
            </div>
          </div>
          <div className="review_wrap">
            {foodDetail.reviews && foodDetail.reviews.length > 0 ? (
              foodDetail.reviews.map((review, index) => (
                <A.Review key={index}>
                  <div className="top">
                    <div className="profile">
                      <img src={profil} alt={review.userName} />
                      <div className="name">{review.userName}</div>
                    </div>
                  </div>
                  <div className="inner">
                    <p className="comment">{review.comment}</p>
                  </div>
                </A.Review>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </A.Reviews>

        <A.AD>
          <div className="title">MD's Pick</div>
          <img src={ad} alt="advertisement" />
        </A.AD>
      </A.Food>
      <Footer />
    </C.Common>
  );
}

export default Food;
