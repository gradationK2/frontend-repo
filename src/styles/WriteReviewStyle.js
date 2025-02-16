import styled from "styled-components";
import color from "./color";

export const WriteReview = styled.div``;

export const Header = styled.div`
   width: 393px;
   margin: 0 auto;
    height: 60px;
    display: flex;
    border-bottom: 1px solid ${color.black};
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    position: relative;
    img{
        transform: rotate(90deg);
        width: 27px;
        position: absolute;
    }
    .name{
        margin: 0 auto;
    }

   ` ;
