import styled from "styled-components";
import color from "./color";

export const Food = styled.div`
    width: 393px;
    margin: 0 auto;
    .bg{
        background-color: ${color.gray};
        width: 100%;
        height: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 192px;
            height: 192px;
        }
    }
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
`;
export const FoodList = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
    border-top: 1px solid ${color.black};
`;
export const FoodItem = styled.div`

width: auto;
cursor: pointer;
height: 180px;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
.background{
    background: ${color.gray};
    width: 164px;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    width: 164px;
    height: 145px;
    object-fit: contain;
    }
}

`;
export const FoodTitle = styled.div`
text-align: start;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
.circle{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${color.gradation}; 
}
p{
font-size: 14px;
}
.name{
    font-size: 24px;
    font-weight: 700;
}

`;

export const Info = styled.div`
    position: relative;
    padding: 0 25px ;
   .food-title {
    margin-top: 15px;
    display: flex;
    justify-self: baseline;
  }
  .detail_info{
    color: #767676;
    font-size: 14px;
    margin:15px 0;
    font-weight: 600;
  }
  .spicy{
    display: flex;
    padding:15px 0;
    margin-bottom: 20px;
    img{
        height: 18px;
    }
  }
    padding: 10px;
    border-bottom: 1px solid ${color.black};
`;

export const Heart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    img{
        height: 22px;
        width: 22px;
    }
    p{
        line-height: 10px;
        font-size: 10px;
        margin-top: 5px;
        font-weight: 600;
        background: ${color.gradation}; 
        -webkit-background-clip: text; 
        color: transparent;
    }
`;

export const Detail = styled.div`
    padding: 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${color.black};
    margin-bottom: 20px;
    .sections{
        display: flex;
        gap: 20px;

    }
    .line{
   
        height: 39px;
        margin: 30px 0;
    }
    .comment{
        font-size: 10px;
        color: #818181;
    }
    .danger{
        font-size: 24px;
        font-weight: bolder;
        color: #E9402B;
        margin-top: 30px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    gap:10px;
    overflow: hidden;
    .title{
        font-size: 14px;
        color: ${color.black};
        font-weight: 700;
        margin: 10px 0;
    }
    .bg{
        background-color: ${color.gray};
        width: 124px;
        height: 105px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
       img{
            max-width: 100px;
            max-height: 100px;
            object-fit: contain;
       }
    }
    .spicy{
    display: flex;
    padding:5px 0;

    img{
        height: 18px;
    }
  }
  .Scoville{
    font-size: 12px;
    color: #686868;
    padding:5px 0;
  }
  .comment{
    color: #414141;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    width: 170px;
  }
 
  
`;

export const Reviews = styled.div`
    margin-top: -5px;

    padding: 0 25px ;
    padding-bottom: 35px;
   white-space: nowrap;
   margin-bottom: 20px;
   border-bottom: 1px solid ${color.black};
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        >P{
            font-size: 14px;
            color: ${color.black};
            font-weight: 700;
            display: flex;
            align-items: baseline;
            justify-content: center;
            line-height: 22px;
            .add{
                color: #686868;
                font-size: 20px;
                font-weight: 600;
                margin: 0 5px;
                cursor: pointer;
            
            }
        }
        .btn{
            background: ${color.gradation}; 
            -webkit-background-clip: text; 
            color: transparent;
            font-weight:600;
            font-size: 12px;
            position: relative;
            cursor: pointer;
            span{
                margin:0 3px ;
            }
            .line{
                height: 1px;
                width: 45px;
                background: ${color.gradation}; 
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    
    }
    .review_wrap{
    
            overflow-x: scroll;
            display: flex;
            gap: 10px;
            white-space: nowrap;
        }
        ::-webkit-scrollbar {
                display: none;  
         }
`;

export const Review = styled.div`
    width: 245px !important;
   
    flex-shrink: 0;
    height: 142px;
    border-radius: 8px;
    border: 1px solid transparent;
    background-image: linear-gradient(#fff, #fff), ${color.gradation};
    background-origin: border-box;
    background-clip: content-box, border-box;
    .top{
        margin: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .profile{
            display: flex;
            align-items: center;
            gap: 5px;
            img{
                width: 24px;
            }
            .name{
                font-size: 16px;
                font-weight: 700;
                
            }
        }
        .spicy_score{
            display: flex;
            img{
                height: 12px;
            }
        }
    }
    .inner{
        margin: 20px;
        .comment{
            font-size: 12px;
            font-weight: 600;

        }

    }

`;

export const AD = styled.div`
margin-bottom:30px;
  .title{
        font-size: 14px;
        color: ${color.black};
        font-weight: 700;
        margin: 25px ;
    }
`;

export const Spicy = styled.div`
    display: flex;
            img{
                height: 12px;
            }
`;