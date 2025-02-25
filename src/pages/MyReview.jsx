import React, { useEffect, useState } from "react";
import * as A from "../styles/MyReviewStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import Trash from "../assets/Trash.svg";
import Star from "../assets/Star.svg";
import ReviewImg from "../assets/ReviewImg.svg";
import img from "../assets/basicImg.svg";
import circle from "../assets/circle.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function MyReview() {
  const location = useLocation();
  const userId = location.state?.userId;
  const [formValue, setFormValue] = useState({
    name: "",
    profileImageFile: "",
  });

  const navigate = useNavigate();
  const [reviewItems, setReviewItems] = useState([]);

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

  useEffect(() => {
    const fetchReviewItems = async () => {
      try {
        const response = await axiosInstance.get(`/reviews/users/${userId}`);
        setReviewItems(response.data);
        console.log("리뷰 목록", response.data);
      } catch (error) {
        console.error("리뷰 목록을 불러오는 중 오류 발생", error);
      }
    };

    fetchReviewItems();
  }, [userId]);

  const deleteReview = async (reviewId) => {
    try {
      const response = await axiosInstance.delete("/reviews", {
        data: { review_id: reviewId }, // 요청 본문에 review_id 포함
      });

      console.log(response.data.message); // 삭제 완료 메시지 확인

      // 삭제된 리뷰를 제외한 나머지 리뷰로 상태 업데이트
      setReviewItems((prev) => prev.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error("리뷰 삭제 중 오류 발생", error);
    }
  };

  const DeleteAllReview = async () => {
    try {
      const response = await axiosInstance.delete("/reviews/del-all", {
        data: { user_id: userId }, // 요청 본문에 review_id 포함
      });

      setReviewItems([]);
      console.log(response.data.message); // 삭제 완료 메시지 확인
    } catch (error) {
      console.error("리뷰 삭제 중 오류 발생", error);
    }
  };

  const goEdit = () => {
    navigate("/Profile");
  };

  const goReviews = () => {
    navigate("/ReviewAll", { state: { userId } });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <C.Common>
      <A.MyReview>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>나의 리뷰</A.Title>
        </A.Header>
        <A.Hr />

        <A.MyInfoBox>
          <A.MyPhoto src={formValue.image || img} />

          <A.MyInfo>
            <A.Name>{formValue.name}</A.Name>
            <A.GoEdit onClick={goEdit}>개인정보수정</A.GoEdit>
          </A.MyInfo>
        </A.MyInfoBox>

        {reviewItems.length > 0 ? (
          <A.Delete onClick={DeleteAllReview}>
            모두 삭제 <A.Trash src={Trash} />
          </A.Delete>
        ) : (
          <A.Nodata>작성한 리뷰가 없습니다.</A.Nodata>
        )}

        <A.ReviewBox>
          {reviewItems.slice(0, 3).map((review) => (
            <A.Review key={review.id}>
              <A.Top>
                <A.FoodName>
                  <A.Circle src={circle} /> {review.content}
                  <A.Trash src={Trash} onClick={() => deleteReview(review.id)} />
                </A.FoodName>
                <A.Stars>
                  {[...Array(review.spicyLevel || 0)].map((_, i) => (
                    <A.Star key={i} src={Star} />
                  ))}
                </A.Stars>
              </A.Top>
              <A.Date>{new Date(review.createDate).toLocaleDateString()}</A.Date>
              <A.Comment>{review.content}</A.Comment>
            </A.Review>
          ))}
        </A.ReviewBox>

        {reviewItems.length > 3 && (
          <A.ReviewMore onClick={goReviews}>
            + Review <A.Span>{reviewItems.length}</A.Span>
          </A.ReviewMore>
        )}
      </A.MyReview>
    </C.Common>
  );
}

export default MyReview;
