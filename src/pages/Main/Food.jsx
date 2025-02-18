import React from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/FoodStyle";
import test from "../../assets/main/dummy.png";
import empty_heart from "../../assets/main/empty_heart.png";
import pepper from "../../assets/main/pepper.png";
import hot from "../../assets/main/spicy.png";
import tabasco from "../../assets/main/tabasco.png";
import ad from "../../assets/main/ad.png";
import line from "../../assets/main/line.svg";
import profil from "../../assets/main/test_profil.svg";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import Footer from "../Footer";


function Food() {
  const { id } = useParams();
   const navigate = useNavigate(); 
   const goReviews = () => {
    navigate(`/review/:${id}`);
   }
  return (
    <C.Common>
      <Header />
      <A.Food>
        <div className="bg">
          <img src={test} alt="" />
        </div>
        <A.Info>
          <A.FoodTitle className="food-title">
            <div className="circle"></div>
            <div className="name">Buldak</div>
          </A.FoodTitle>
          <div className="detail_info">“Artifical Spicy Chicken Flavaor Ramen”</div>
          <div className="spicy">
            <img src={pepper} alt="" />
            <img src={pepper} alt="" />
            <img src={pepper} alt="" />
            <img src={pepper} alt="" />
            <img src={pepper} alt="" />
          </div>
          <A.Heart>
            <img src={empty_heart} alt="" />
            <p className="sum">1.2k</p>
          </A.Heart>
        </A.Info>

        <A.Detail>
          <div className="sections">
            <A.Section>
              <div className="title">사람들의 입맛</div>
              <div className="bg">
                <img src={hot} alt="" />
              </div>
              <div className="spicy">
                <img src={pepper} alt="" />
                <img src={pepper} alt="" />
                <img src={pepper} alt="" />
                <img src={pepper} alt="" />
                <img src={pepper} alt="" />
              </div>
              <div className="comment">매워요</div>
            </A.Section>

            <A.Section>
              <div className="title">스코빌 지수 기준</div>
              <div className="bg">
                <img src={tabasco} alt="" />
              </div>
              <div className="Scoville">
                (2,500 ~ 5,000 SHU)
              </div>
              <div className="comment">타바스코 소스와 비슷하거나 조금 더 매운 편</div>
            </A.Section>
          </div>

          <img src={line} alt="" className="line" />
          <div className="comment">*스코빌 지수(Scoville Heat Unit, SHU)는 미국에서 개발된 매운맛 측정 기준</div>

          <div className="danger">매운 편이에요!</div>
        </A.Detail>
        <A.Reviews>
          <div className="title">
            <p>Review 14,903<span className="add" onClick={() => navigate(`/writeReview/:${id}`)}>+</span></p>
            <div className="btn" onClick={goReviews}> View all <span>&gt;</span>
            <div className="line"></div></div>

          </div>
          <div className="review_wrap">
            <A.Review>
              <div className="top">
                <div className="profile">
                  <img src={profil} alt="" />
                  <div className="name">sam</div>
                </div>
                <A.Spicy>
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                </A.Spicy>
              </div>
              <div className="inner">
                <p className="comment">It’s so hot!!!!!!🔥🔥🔥🔥🔥🔥
                <br/> but, very delicious</p>
              </div>

            </A.Review>
            <A.Review>
              <div className="top">
                <div className="profile">
                  <img src={profil} alt="" />
                  <div className="name">Sam</div>
                </div>
                <div className="spicy_score">
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                  <img src={pepper} alt="" />
                </div>
              </div>
              <div className="inner">
                <p className="comment">It’s so hot!!!!!!🔥🔥🔥🔥🔥🔥
                <br/>but, very delicious</p>
              </div>

            </A.Review>
          </div>


        </A.Reviews>
        <A.AD>
          <div className="title">
            MD's Pick
          </div>

          <img src={ad} alt="" />
        </A.AD>

      </A.Food>
      <Footer/>


    </C.Common>
  );
}

export default Food;
