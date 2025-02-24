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
    label{
      
        img{
            width: 363px;
            min-height: 284px;
            height: auto;
            object-fit: cover;
        }

    }
    .carousel, .add_image{
        width: 363px;
        padding: 20px 0;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;
        left: 0;
        >img{
            width: 100%;
            min-height: 284px;
            height: auto;
            object-fit: cover;
        }
        .right{
            right: -10px;
        }
        .carousel-button{
            pointer-events: auto;
        }
        button{
            background-color:rgba(0, 0, 0, 0);
            border: none;
            position: absolute;
          
            left: -10px;
            z-index: 100;
            &.right{
                transform: rotate(180deg); 
                display: flex;  
               img{
                justify-content: end;
               }
            }
            
            img{
                    width: 27px;
                    height: 27px;
                }
        }
    }
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
        &.foodname{
            height: 40px;
            display: flex;

            align-items: center;
            p{
                font-size: 14px;
                margin: 0 10px;
                font-weight: 500;
            }
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
            height: 27px;
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
    margin: 40px 0;
`;
