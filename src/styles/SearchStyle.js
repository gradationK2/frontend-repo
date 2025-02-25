import styled from "styled-components";
import color from "./color";

export const Search = styled.div`
    width: 393px;
    margin: 0 auto;
    .spinner{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SearchBar = styled.div`

    margin: 20px auto;

    height: 53px;
    position: relative;
   
    
    display: flex;
    justify-content: space-around;
    .search{
        width: 320px;
        border: 1px solid transparent;
    background-image: linear-gradient(#fff, #fff), ${color.gradation};
    background-origin: border-box;
    background-clip: content-box, border-box;
        display: flex;
        border-radius: 200px;
    justify-content: center;
    align-items: center;
    }
    .back{
        transform: rotate(90deg);
       
        img{
            width: 24px;
            height: 24px;
          
            top: 0;
        }
    }
    input{
        width: 250px;
        border: none;
        outline: none;
        height: 30px;
        font-size: 14px;
    }

`;


export const Ranking = styled.div`
    width: 300px;
    height: 200px;
    margin: 0 auto;
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
            cursor: pointer;
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