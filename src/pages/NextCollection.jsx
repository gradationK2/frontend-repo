import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as A from "../styles/NextCollectionStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import badge from "../assets/badge.svg";

import axiosInstance from "../api/axiosInstance";

function NextCollection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, userName } = location.state || {};
  const [badgeItems, setBadgeItems] = useState([]);

  useEffect(() => {
    const fetchBadgeItems = async () => {
      try {
        const response = await axiosInstance.get(`/users/badge/${userId}`);
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

  const progress = (badgeItems.currentCount / (badgeItems.requiredCount + badgeItems.currentCount)) * 100;

  return (
    <C.Common>
      <A.NextCollection>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.Info>
          <A.Name>• {userName}</A.Name>님의 배찌는?
        </A.Info>

        <A.Badge>
          <A.BadgeImg src={badge} />
          <A.BadgeTitle>{badgeItems.badgeName}</A.BadgeTitle>
          <A.BadgeInfo>다음 배찌까지 남은 후기 {badgeItems.requiredCount}개!</A.BadgeInfo>
        </A.Badge>

        <A.BarInfo>• 다음 배찌까지 후기 {badgeItems.requiredCount}개!</A.BarInfo>
        <A.ProgressBarContainer2>
          <A.ProgressBarContainer>
            <A.ProgressBarFill width={progress} />
          </A.ProgressBarContainer>
        </A.ProgressBarContainer2>
      </A.NextCollection>
    </C.Common>
  );
}

export default NextCollection;
