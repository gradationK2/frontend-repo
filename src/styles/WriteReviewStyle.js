import styled from "styled-components";
import color from "./color";

export const WriteReview = styled.div`
    width: 393px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .add_image{
        width: 100px;
        margin: 20px 0;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        img{
            height: 100px;
        }
        p{
            color: #818181;
            font-size: 16px;
        }
    }
    .input{
        border-radius: 8px;
        border: 1px solid transparent;
        background-image: linear-gradient(#fff, #fff), ${color.gradation};
        background-origin: border-box;
        background-clip: content-box, border-box;
        width: 343px;
        height: 254px;
        
        textarea{
            width: calc(100% - 40px) ;
            height: calc(100% - 40px);
            padding: 20px;
            background: none;
            border: none;
            outline: none;
            resize: none;
        }
    }

`;

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

export const Spicy = styled.div`
display: flex;
gap: 5px;
        img{
            height: 12px;
        }
`;

export const Button = styled.div`
    background: ${color.gradation};
    width: 344px;
    height: 44px;
    border-radius: 22px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-top: 40px;
`;
