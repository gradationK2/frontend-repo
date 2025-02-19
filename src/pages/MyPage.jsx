import React from "react";
import * as A from "../styles/MyPageStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import img from "../assets/basicImg.svg";
import badge from "../assets/badge.svg";

function MyPage() {
  return (
    <C.Common>
      <A.MyPage>
        <A.Header>
          <A.Goback src={forward} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.MyInfoBox>
          <A.MyPhoto src={img} />
          <A.MyInfo>
            <A.Name>dahyun0423</A.Name>
            <A.GoEdit>개인정보수정</A.GoEdit>
          </A.MyInfo>
        </A.MyInfoBox>
        <A.Main>
          <A.BadgeBox>
            <A.MyBadge src={badge} />
            <A.BadgeRank>
              <A.Name>Royal K-chop!</A.Name>
              <A.Rank>상위 2%</A.Rank>
            </A.BadgeRank>
          </A.BadgeBox>

          <A.ActivityBox>
            <A.Activity>
              <A.Text>나의 배찌</A.Text>
              <A.Text>12개</A.Text>
            </A.Activity>
            <A.Activity>
              <A.Text>찜</A.Text>
              <A.Text>30</A.Text>
            </A.Activity>
            <A.Activity>
              <A.Text>나의 리뷰</A.Text>
              <A.Text>2</A.Text>
            </A.Activity>
          </A.ActivityBox>
        </A.Main>
        <A.Logout>로그아웃</A.Logout>
      </A.MyPage>
    </C.Common>
  );
}

export default MyPage;
