import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/FoodStyle";
import * as A from "../../styles/ReviewStyle";
import Forward from "../../assets/main/Forward.svg";
import profil from "../../assets/main/test_profil.svg";
import pepper from "../../assets/main/pepper.png";
import on_good from "../../assets/main/on_good.png";
import off_good from "../../assets/main/off_good.png";
import on_bad from "../../assets/main/on_bad.png";
import off_bad from "../../assets/main/off_bad.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Review() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = sessionStorage.getItem("accessToken");

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`/reviews/food/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setReviews(response.data.reviews);
        })
        .catch((error) => {
          console.error("리뷰를 가져오는 중 오류 발생:", error);
        });
    }
  }, [id, token]);

  const toggleLike = async (reviewId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    if (review.isLiked) {
      try {
        await axios.delete("/reviews/upvote", {
          data: { review_id: reviewId, user_id: userId },
          headers: { Authorization: `Bearer ${token}` },
        });
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isLiked: false } : r
          )
        );
      } catch (error) {
        console.error("좋아요 취소 실패:", error);
      }
    }

    else if (review.isDisliked) {
      try {
        await axios.delete("/reviews/douwnvote", {
          data: { review_id: reviewId, user_id: userId },
          headers: { Authorization: `Bearer ${token}` },
        });
        await axios.post(
          "/reviews/upvote",
          { review_id: reviewId, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isDisliked: false, isLiked: true } : r
          )
        );
      } catch (error) {
        console.error("좋아요 요청 실패:", error);
      }
    }

    else {
      try {
        await axios.post(
          "/reviews/upvote",
          { review_id: reviewId, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isLiked: true } : r
          )
        );
      } catch (error) {
        console.error("좋아요 요청 실패:", error);
      }
    }
  };

  const toggleDislike = async (reviewId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    if (review.isDisliked) {
      try {
        await axios.delete("/reviews/downvote", {
          data: { review_id: reviewId, user_id: userId },
          headers: { Authorization: `Bearer ${token}` },
        });
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isDisliked: false } : r
          )
        );
      } catch (error) {
        console.error("싫어요 취소 실패:", error);
      }
    }

    else if (review.isLiked) {
      try {
        await axios.delete("/reviews/upvote", {
          data: { review_id: reviewId, user_id: userId },
          headers: { Authorization: `Bearer ${token}` },
        });
        await axios.post(
          "/reviews/downvote",
          { review_id: reviewId, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isLiked: false, isDisliked: true } : r
          )
        );
      } catch (error) {
        console.error("싫어요 요청 실패:", error);
      }
    }

    else {
      try {
        await axios.post(
          "/reviews/downvote",
          { review_id: reviewId, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r.id === reviewId ? { ...r, isDisliked: true } : r
          )
        );
      } catch (error) {
        console.error("싫어요 요청 실패:", error);
      }
    }
  };

  return (
    <C.Common>
      <A.Header>
        <img src={Forward} alt="뒤로가기" onClick={() => navigate(-1)} />
        <div className="name">리뷰</div>
      </A.Header>
      <A.Review>
        <div className="title">
          <p>
            reviews <span>{reviews.length}</span>
          </p>
        </div>

        {reviews.map((review) => (
          <A.ReviewItem key={review.id}>
            <div className="profile">

              <img src={review.member?.photoUrl || profil} alt={review.member?.name} />

              <div className="name">
                {review.member?.name}{" "}
                <span className="day">
                  {review.createDate.split("T")[0]}
                </span>
              </div>
            </div>

            {review.imgUrl && (
              <div className="images">
                {review.imgUrl.includes("|")
                  ? review.imgUrl.split("|").map((img, index) => (
                    <img key={index} src={img} alt={`리뷰 이미지 ${index + 1}`} />
                  ))
                  : <img src={review.imgUrl} alt="리뷰 이미지" />
                }
              </div>
            )}



            <S.Spicy className="spicy">
              {Array.from({ length: review.spicyLevel }).map((_, index) => (
                <img key={index} src={pepper} alt="매운맛" />
              ))}
            </S.Spicy>

            <div className="comment">{review.content}</div>

            <div className="btn">
              <img
                src={review.isLiked ? on_good : off_good}
                alt="좋아요"
                onClick={() => toggleLike(review.id)}
              />
              <img
                src={review.isDisliked ? on_bad : off_bad}
                alt="싫어요"
                onClick={() => toggleDislike(review.id)}
              />
            </div>
          </A.ReviewItem>
        ))}
      </A.Review>
    </C.Common>
  );
}

export default Review;
