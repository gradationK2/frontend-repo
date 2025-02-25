import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import * as A from "../styles/CollectionStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import badgeImg from "../assets/badge.svg";

function Collection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, userName } = location.state || {};
  const [badgeItems, setBadgeItems] = useState([]);

  useEffect(() => {
    const fetchBadgeItems = async () => {
      try {
        const response = await axiosInstance.get(`/users/badge/list/${userId}`);
        setBadgeItems(response.data);
        console.log("배찌 목록", response.data);
      } catch (error) {
        console.error("배찌 목록을 불러오는 중 오류 발생", error);
      }
    };

    fetchBadgeItems();
  }, [userId]);

  const goBack = () => {
    navigate(-1);
  };

  const BASE_URL = process.env.REACT_APP_BASE_API_URL;

  return (
    <C.Common>
      <A.Collection>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.Info>
          <A.Name>• {userName}</A.Name>님의 배찌현황은?
        </A.Info>

        <A.BadgeBox>
          <A.Title>보유 배찌</A.Title>
          <A.Badges>
            {badgeItems.length > 0 ? (
              badgeItems.map((badge, index) => (
                <A.Badge key={index}>
                  {/* 배찌 이미지 안 불러와져서 임의로 프론트에서 넣음 */}
                  <A.BadgeImg src={`${BASE_URL}${badge.imagePath}` || badgeImg} alt={badge.name} />
                  <A.BadgeTitle>{badge.name}</A.BadgeTitle>
                </A.Badge>
              ))
            ) : (
              <A.Nodata>보유한 배찌가 없습니다.</A.Nodata>
            )}
          </A.Badges>
        </A.BadgeBox>
      </A.Collection>
    </C.Common>
  );
}

export default Collection;
