import styled from "styled-components";
import color from "./color";

export const Main = styled.div`
width: 393px;
margin: 0 auto;
position: relative;
 border-top: 1px solid ${color.black};
`;
export const Header = styled.div`

  border-top: 1px solid ${color.black};
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .logo{
        width: 154px;
    }
   
`;

export const SortBar = styled.div`
position: relative;
    font-size: 12px;
    font-weight: bold;
    background: ${color.gradation}; 
    -webkit-background-clip: text; 
    color: transparent;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    cursor: pointer;
`;
export const Sortlist = styled.div`
  position: absolute;
  z-index: 100;
  width: fit-content;
  display: flex;
  top: 110px;
  flex-direction: column;
  height: auto;
  padding: 1px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-image: linear-gradient(#fff, #fff), ${color.gradation};
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;

  &.visible {
  
    opacity: 1;
    visibility: visible;
  }
  &.left {
    left: 20px;
  }
  &.right {
    right: 20px;
  }
`;




export const Sortitem = styled.div`
   font-size: 12px;
   margin: 5px 10px;
   cursor: pointer;
   transition: all 0.3s ease;
   display: inline-block;
   &:hover{
    font-weight: bold;
   }
`;


export const CateItem = styled.div`
   font-size: 12px;
   pointer-events: auto;
   z-index: 10;
   cursor: pointer;
   &.active{
    font-weight: bold;
   }

   &:hover{
    font-weight: bold;
   }
`;