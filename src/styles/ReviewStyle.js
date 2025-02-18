import styled from "styled-components";
import color from "./color";

export const Review = styled.div`
    margin: 0 auto;
    width: 393px;
    .title{
        width: 100%;
        height: 40px;
        background-color: ${color.gray};
        padding:0 20px ;
        display: flex;
        align-items: center;
        font-size: 14px;

         font-weight: 700;
        
        >span{
            background: ${color.gradation}; 
            -webkit-background-clip: text; 
            color: transparent;
            margin-left: 5px;
            font-weight: normal;
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

export const ReviewItem = styled.div`
    padding: 25px;
    position: relative;
    border-bottom: 3px solid ${color.gray};
    .images{
        margin: 15px 0;
        display: flex;
        height: 115px;
        gap: 10px;
        overflow-x: scroll;
        white-space: nowrap;
        img{
            width: 113px;
            height: 113px;
            object-fit: contain;
            border: 1px solid ${color.black};
        }
    } ::-webkit-scrollbar {
                display: none;  
         }
    .profile{
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 5px;
            img{
                width: 24px;
            }
            .name{
                font-size: 16px;
                font-weight: 700;
                display: flex;
                flex-direction: column;
                .day{
                    font-size: 12px;
                    color: #aaaaaa;
                    font-weight: normal;
                }
            }
        }
        .comment{
            margin-top: 5px;
            font-size: 14px;
            font-weight: normal;
        }
        .spicy{
            height: 20px;
            margin: 10px 0;
            align-items: end;
        }
        .btn{
            display: flex;
            position: absolute;
            right: 20px;
            bottom: 25px;
            gap: 10px;
            img{
                width: 16px;
            }
        }
`;