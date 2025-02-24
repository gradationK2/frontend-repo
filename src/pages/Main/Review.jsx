import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/FoodStyle";
import * as A from "../../styles/ReviewStyle";
import Forward from "../../assets/main/Forward.svg";
import profil from "../../assets/main/test_profil.svg";
import pepper from "../../assets/main/pepper.png";
import test from "../../assets/main/dummy.png";
import on_good from "../../assets/main/on_good.png";
import off_good from "../../assets/main/off_good.png";
import on_bad from "../../assets/main/on_bad.png";
import off_bad from "../../assets/main/off_bad.png";
import { useNavigate } from "react-router-dom"; 

function Review() {
  const navigate = useNavigate();
  
  const [reviews, setReviews] = useState([
    { id: 1, name: "Sam", date: "2025.01.02", comment: "this is so yummy. not spicy.", images: [test, test, test, test, test], spicyLevel: 4, isLiked: false, isDisliked: false },
    { id: 2, name: "Sam", date: "2025.01.02", comment: "I love this! So good!", images: [], spicyLevel: 3, isLiked: false, isDisliked: false },
  ]);


  const toggleLike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, isLiked: !review.isLiked, isDisliked: false }
          : review
      )
    );
  };

  const toggleDislike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, isDisliked: !review.isDisliked, isLiked: false }
          : review
      )
    );
  };

  return (
    <C.Common>
      <A.Header>
        <img src={Forward} alt="" onClick={() => navigate(-1)} />
        <div className="name">리뷰</div>
      </A.Header>
      <A.Review>
        <div className="title">
          <p>reviews <span>{reviews.length}</span></p>
          </div>

        {reviews.map((review) => (
          <A.ReviewItem key={review.id}>
            <div className="profile">
              <img src={profil} alt="" />
              <div className="name">{review.name} <span className="day">{review.date}</span></div>
            </div>


            {review.images.length > 0 && (
              <div className="images">
                {review.images.map((img, index) => (
                  <img key={index} src={img} alt="" />
                ))}
              </div>
            )}


            <S.Spicy className="spicy">
              {Array.from({ length: review.spicyLevel }).map((_, index) => (
                <img key={index} src={pepper} alt="spicy" />
              ))}
            </S.Spicy>

            <div className="comment">{review.comment}</div>

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
