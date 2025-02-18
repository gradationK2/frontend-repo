import React from "react";
import * as A from "../styles/NextCollectionStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import badge from "../assets/badge.svg";

function NextCollection() {
  return (
    <C.Common>
      <A.NextCollection>
        <A.Header>
          <A.Goback src={forward} />
          <A.Title>마이페이지</A.Title>
        </A.Header>
        <A.Hr />

        <A.Info>
          <A.Name>• dahyun0423</A.Name>님의 배찌는?
        </A.Info>

        <A.Badge>
          <A.BadgeImg src={badge} />
          <A.BadgeTitle>어흥! 나는 아기 먹짱</A.BadgeTitle>
          <A.BadgeInfo>다음 배찌까지 남은 후기 2개!</A.BadgeInfo>
        </A.Badge>
      </A.NextCollection>
    </C.Common>
  );
}

export default NextCollection;
