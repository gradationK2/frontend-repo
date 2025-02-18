import React from "react";
import * as A from "../styles/LikeStyle";
import * as C from "../styles/CommonStyle";
import forward from "../assets/Forward.svg";
import FoodImg from "../assets/FoodImg.svg";
import Heart from "../assets/Heart.svg";

function Like() {
  return (
    <C.Common>
      <A.Like>
        <A.Header>
          <A.Goback src={forward} />
          <A.Title>좋아요</A.Title>
        </A.Header>
        <A.Hr />

        <A.LikeBox>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>

          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
          <A.Food>
            <A.ImgBox>
              <A.FoodImg src={FoodImg} />
            </A.ImgBox>
            <A.FoodLike>
              <A.Name>신라면</A.Name>
              <A.LikeCheck src={Heart} />
            </A.FoodLike>
          </A.Food>
        </A.LikeBox>
      </A.Like>
    </C.Common>
  );
}

export default Like;
