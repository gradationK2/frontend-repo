import React from "react";
import * as A from "../styles/CollectionStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import badge from "../assets/badge.svg";

function Collection() {
  return (
    <C.Common>
      <A.Collection>
        <A.Header>
          <A.Goback src={forward} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.Info>
          <A.Name>• dahyun0423</A.Name>님의 배찌현황은?
        </A.Info>

        <A.BadgeBox>
          <A.Title>보유 배찌</A.Title>
          <A.Badges>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
            <A.Badge>
              <A.BadgeImg src={badge} />
              <A.BadgeTitle>매운맛 컬랙터</A.BadgeTitle>
              <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
            </A.Badge>
          </A.Badges>
        </A.BadgeBox>
      </A.Collection>
    </C.Common>
  );
}

export default Collection;
