import React, { useEffect, useState } from "react";
import * as A from "../styles/MyPageStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import img from "../assets/basicImg.svg";
import badge from "../assets/badge.svg";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/api/user/me");

        setUser(response.data);
        console.log("사용자 정보", response);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류 발생", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");
      await axiosInstance.post("/api/auth/logout", { refreshToken: refreshToken });

      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");

      console.log("로그아웃 성공");
      navigate("/main");
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  const goEdit = () => {
    navigate("/Profile");
  };

  const goBack = () => {
    navigate(-1);
  };

  const goLogin = () => {
    navigate("/login");
  };

  const goBadge = () => {
    navigate("/Collection", { state: { userId: user.id, userName: user.name } });
  };

  const goLike = () => {
    navigate("/like", { state: { userId: user.id } });
  };

  const goReview = () => {
    navigate("/MyReview", { state: { userId: user.id, userPhoto: user.PhotoUrl, userName: user.name } });
  };

  const goNextBadge = () => {
    navigate("/NextCollection", { state: { userId: user.id, userName: user.name } });
  };

  return (
    <C.Common>
      <A.MyPage>
        <A.Header>
          <A.Goback src={forward} onClick={goBack} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.MyInfoBox>
          <A.MyPhoto src={img} />
          <A.MyInfo>
            {user ? (
              <>
                <A.Name>{user.name}</A.Name>
                <A.GoEdit onClick={goEdit}>개인정보수정</A.GoEdit>
              </>
            ) : (
              <A.GoLogin onClick={goLogin}>로그인 해주세요 &gt;</A.GoLogin>
            )}
          </A.MyInfo>
        </A.MyInfoBox>
        <A.Main>
          <A.BadgeBox onClick={goNextBadge}>
            <A.MyBadge src={badge} />

            {user ? (
              <>
                <A.BadgeRank>
                  <A.Name>{user.badge}</A.Name>
                  <A.Rank>상위 {user.percent}%</A.Rank>
                </A.BadgeRank>
              </>
            ) : (
              <A.Name>Let's do K-chop!</A.Name>
            )}
          </A.BadgeBox>

          {user ? (
            <>
              <A.ActivityBox>
                <A.Activity onClick={goBadge}>
                  <A.Text>나의 배찌</A.Text>
                  <A.Text>{user.badgeCount}개</A.Text>
                </A.Activity>
                <A.Activity onClick={goLike}>
                  <A.Text>찜</A.Text>
                  <A.Text>{user.heartCount}</A.Text>
                </A.Activity>
                <A.Activity onClick={goReview}>
                  <A.Text>나의 리뷰</A.Text>
                  <A.Text>{user.reviewCount}</A.Text>
                </A.Activity>
              </A.ActivityBox>
            </>
          ) : (
            <></>
          )}
        </A.Main>
        {user ? (
          <>
            <A.Logout onClick={handleLogout}>로그아웃</A.Logout>
          </>
        ) : (
          <></>
        )}
      </A.MyPage>
    </C.Common>
  );
}

export default MyPage;
