import styled from "styled-components";
import color from "./color";

export const Search = styled.div`
    width: 393px;
    margin: 0 auto;
`;

export const SearchBar = styled.div`
    margin: 20px auto;
    width: 343px;
    height: 53px;

    border-radius: 200px;
    border: 1px solid transparent;
    background-image: linear-gradient(#fff, #fff), ${color.gradation};
    background-origin: border-box;
    background-clip: content-box, border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width: 280px;
        border: none;
        outline: none;
        height: 50px;
        font-size: 14px;
    }

`;


export const Ranking = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f7f7f7;
    padding: 40px;
    .title{
        display: flex;
        align-items: center;
        .circle{
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background: ${color.gradation}; 
            margin-right: 20px;
        }
        .name{
            font-size: 16px;
            font-weight: bold;
        }
    }
    .inner{
        margin-left: 28px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 14px;
        font-weight: 600;
        span{
            margin-left: 15px;
        }
        .first{
            color: ${color.red};
        }
        .second{
            color:#F05E37 ;
        }
        .third{
            color: ${color.orange};
        }
    }

`;