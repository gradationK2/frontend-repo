import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/FoodStyle";
import test from "../../assets/main/dummy.png";
import empty_heart from "../../assets/main/empty_heart.png";
import heart from "../../assets/main/fullheart.svg";
import pepper from "../../assets/main/pepper.png";
import spinner from "../../assets/main/Spinner@1x-1.0s-200px-200px.gif";
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
  const token = localStorage.getItem("accessToken");
  const [reviews, setReviews] = useState([]);
  const [foodDetail, setFoodDetail] = useState({});
  const [liked, setLiked] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFoodDetails = async () => {
    try {
      const response = await axios.get(`/api/food/detail/${id}`);
      if (response.status === 200) {
        setFoodDetail(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("음식 상세 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const fetchUserData = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const fetchedUserId = response.data.id;
        setUserId(fetchedUserId);
        localStorage.setItem("userId", fetchedUserId);
        console.log(fetchedUserId)
        await checkIfLiked(fetchedUserId);
      }
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };

  const checkIfLiked = async (userId) => {
    try {
      const response = await axios.get(`/users/likes/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        const likedFoodIds = response.data.map((food) => food.foodId);
        setLiked(likedFoodIds.includes(Number(id)));
      }
    } catch (error) {
      console.error("좋아요한 음식 목록 가져오기 실패:", error);
    }
  };

  const fetchReviews = () => {
    if (id) {
      axios
        .get(`/reviews/food/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setReviews(response.data.reviews);
          console.log(response.data.reviews);
        })
        .catch((error) => {
          console.error("리뷰를 가져오는 중 오류 발생:", error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchFoodDetails();
      await fetchUserData();
      fetchReviews();
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleLikeToggle = async () => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
      return;
    }
    if (liked) {
      try {
        await axios.delete("/users/heart", {
          data: { food_id: id, user_id: userId },
          headers: { Authorization: `Bearer ${token}` },
        });
        setLiked((prev) => !prev);
        fetchFoodDetails();
      } catch (error) {
        console.error("좋아요 취소 실패:", error);
      }
    } else {
      try {
        await axios.post(
          "/users/heart",
          { food_id: id, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLiked((prev) => !prev);
        fetchFoodDetails();
      } catch (error) {
        console.error("좋아요 요청 실패:", error);
      }
    }
  };

  const goReviews = () => {
    navigate(`/review/${id}`, { state: { foodId: id } });
  };

  const goWriteReview = () => {
    if (token) {
      navigate(`/writeReview/${id}`, { state: { foodId: id, foodName: foodDetail.name } });
    } else {
      alert("로그인 후에 이용하실 수 있습니다.");
      navigate("/login");
    }
  };

  const getSpicyImage = () => {
    switch (foodDetail.spicyLevelText) {
      case "안 매움":
        return nothot;
      case "약간 매움":
        return littlehot;
      case "매움":
        return hot;
      default:
        return hot;
    }
  };

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
        {loading ? (
          <div className="loading">
            <img src={spinner} alt="" />
          </div>
        ) : (
          <>
            <div className="bg">
              <img src={foodDetail.imgUrl || test} alt={foodDetail.name} />
            </div>
            <A.Info>
              <A.FoodTitle className="food-title">
                <div className="circle"></div>
                <div className="name">{foodDetail.name}</div>
              </A.FoodTitle>
              <div className="detail_info">
                {foodDetail.description || "Delicious spicy ramen"}
              </div>
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
                  <p className="Scoville">(2,500 ~ 5,000 SHU)</p>
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
                  Review {reviews.length}
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
                {reviews && reviews.length > 0 ? (
                 reviews.map((review, index) => (
                    <A.Review key={index}>
                      <div className="top">
                        <div className="profile">
                          <img src={profil} alt={review.member?.name} />
                          <div className="name">{review.member?.name}</div>
                         
                        </div>
                        <div className="spicy_score">
                            {Array.from({ length: review.spicyLevel }).map((_, idx) => (
                              <img key={idx} src={pepper} alt="매운맛" />
                            ))}
                          </div>
                      </div>
                      <div className="inner">
                        <p className="comment">{review.content}</p>
                      </div>
                    </A.Review>
                  ))
                ) : (
                  <p>아직 작성된 리뷰가 없어요!</p>
                )}
              </div>
            </A.Reviews>
            <A.AD>
              <div className="title">MD's Pick</div>
              <img src={ad} alt="advertisement" />
            </A.AD>
          </>
        )}
      </A.Food>
      <Footer />
    </C.Common>
  );
}

export default Food;
