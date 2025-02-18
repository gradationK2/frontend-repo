import styled from "styled-components";
import color from "./color";

export const Common = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh; 
  margin: 0 auto; 
  background: ${color.white};
  color: ${color.black};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
   width: 393px;
   margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .logo{
        width: 154px;
    }
`

export const Footer = styled.div`
  
   margin: 20px auto;
    display: flex;
    color: #818181;
    font-size: 10px;

    
`
