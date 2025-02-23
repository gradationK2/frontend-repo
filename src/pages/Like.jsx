import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as A from "../styles/LikeStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import FoodImg from "../assets/FoodImg.svg";
import Heart from "../assets/Heart.svg";
import axiosInstance from "../api/axiosInstance";

function Like() {
  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const fetchLikedItems = async () => {
      try {
        const response = await axiosInstance.get(`/users/likes/${userId}`);
        setLikedItems(response.data);
        console.log("좋아요 목록", response.data);
      } catch (error) {
        console.error("좋아요 목록을 불러오는 중 오류 발생", error);
      }
    };

    fetchLikedItems();
  }, [userId]);

  // 좋아요 삭제 함수
  const handleUnlike = async (foodId) => {
    try {
      await axiosInstance.delete(`/users/heart`, {
        data: {
          user_id: userId,
          food_id: foodId,
        },
      });

      // UI에서 해당 아이템 제거
      setLikedItems((prevItems) => prevItems.filter((item) => item.foodId !== foodId));
      console.log(`좋아요 삭제 성공: foodId=${foodId}`);
    } catch (error) {
      console.error("좋아요 삭제 중 오류 발생", error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <C.Common>
      <A.Like>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>좋아요</A.Title>
        </A.Header>
        <A.Hr />
        <A.LikeBox>
          {likedItems.length > 0 ? (
            likedItems.map((item) => (
              <A.Food key={item.foodId}>
                <A.ImgBox>
                  <A.FoodImg src={item.imgUrl} alt={item.foodName} />
                </A.ImgBox>
                <A.FoodLike>
                  <A.Name>{item.foodName}</A.Name>
                  <A.LikeCheck src={Heart} onClick={() => handleUnlike(item.foodId)} />
                </A.FoodLike>
              </A.Food>
            ))
          ) : (
            <A.Nodata>좋아요한 항목이 없습니다.</A.Nodata>
          )}
        </A.LikeBox>
      </A.Like>
    </C.Common>
  );
}

export default Like;
