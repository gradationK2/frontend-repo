import React from "react";
import * as A from "../styles/MyReviewStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import Trash from "../assets/Trash.svg";
import Star from "../assets/Star.svg";
import ReviewImg from "../assets/ReviewImg.svg";
import img from "../assets/basicImg.svg";
import circle from "../assets/circle.svg";
import { useNavigate } from "react-router-dom";

function MyReview() {
  return (
    <C.Common>
      <A.MyReview>
        <A.Header>
          <A.Goback src={forward} />
          <A.Title>나의 리뷰</A.Title>
        </A.Header>
        <A.Hr />

        <A.MyInfoBox>
          <A.MyPhoto src={img} />
          <A.MyInfo>
            <A.Name>dahyun0423</A.Name>
            <A.GoEdit>개인정보수정</A.GoEdit>
          </A.MyInfo>
        </A.MyInfoBox>

        <A.Delete>
          모두 삭제 <A.Trash src={Trash} />
        </A.Delete>

        <A.ReviewBox>
          <A.Review>
            <A.Top>
              <A.FoodName>
                <A.Circle src={circle} />
                비빔밥
              </A.FoodName>
              <A.Stars>
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
              </A.Stars>
            </A.Top>
            <A.Date>2025.01.02</A.Date>
            <A.Comment>상당히 맵지는 않는데 지점마다의 고추장 맛이 달라서~~~.</A.Comment>
          </A.Review>
          <A.Review>
            <A.Top>
              <A.FoodName>
                <A.Circle src={circle} />
                비빔밥
              </A.FoodName>
              <A.Stars>
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
              </A.Stars>
            </A.Top>
            <A.Date>2025.01.02</A.Date>
            <A.Comment>상당히 맵지는 않는데 지점마다의 고추장 맛이 달라서~~~.</A.Comment>
          </A.Review>
          <A.Review>
            <A.Top>
              <A.FoodName>
                <A.Circle src={circle} />
                비빔밥
              </A.FoodName>
              <A.Stars>
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
                <A.Star src={Star} />
              </A.Stars>
            </A.Top>
            <A.Date>2025.01.02</A.Date>
            <A.PhotoBox>
              <A.ReviewImg src={ReviewImg} />
              <A.ReviewImg src={ReviewImg} />
              <A.ReviewImg src={ReviewImg} />
              <A.ReviewImg src={ReviewImg} />
            </A.PhotoBox>
            <A.Comment>상당히 맵지는 않는데 지점마다의 고추장 맛이 달라서~~~.</A.Comment>
          </A.Review>
        </A.ReviewBox>

        <A.ReviewMore>
          + Review <A.Span>8</A.Span>
        </A.ReviewMore>
      </A.MyReview>
    </C.Common>
  );
}

export default MyReview;
