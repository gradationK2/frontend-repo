import React from "react";
import Forward from "../../assets/main/Forward.svg";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/WriteReviewStyle";
import { useNavigate } from "react-router-dom"; 

function WriteReview() {
  const navigate = useNavigate();
  return (
    <C.Common>
        <A.Header>
        <img src={Forward} alt="" onClick={() => navigate(-1)} />
        <div className="name">리뷰 쓰기</div>
      </A.Header>
      <A.WriteReview>
        


      </A.WriteReview>
    </C.Common>

  );
}

export default WriteReview;
