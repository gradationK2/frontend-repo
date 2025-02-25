import styled from "styled-components";
import nextright from "../assets/nextright.svg";
import nextleft from "../assets/nextright.svg";

export const NextCollection = styled.div`
  padding: 0 25px;
  margin-top: 2vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Hr = styled.hr`
  width: 390px;
  position: relative;
  right: 24px;
`;

export const Goback = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  width: calc(100% + 24px);
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  margin: 45px 0 28px;
`;

export const Name = styled.div`
  background: linear-gradient(90deg, #ff6e30 0.04%, #e9402b 30.21%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  border-radius: 8px;
  border: 1px solid var(--trendy-ton, #ff6e30);
`;

export const BadgeImg = styled.img`
  width: 77px;
  margin-bottom: 20px;
`;

export const BadgeTitle = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const BadgeInfo = styled.div`
  color: #b3b3b3;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

export const ProgressBarContainer2 = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 14px;
  margin-top: 17px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarContainer = styled.div`
  width: 98%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 10px;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => (props.width > 0 ? `calc(${props.width}% + 15px)` : "15px")};
  background: linear-gradient(to right, #ff6e30 0.04%, #e9402b 30.21%);
  transition: width 0.5s ease-in-out;
  border-radius: 10px;
`;

export const BarInfo = styled.div`
  background: linear-gradient(90deg, #ff6e30 0.04%, #e9402b 30.21%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  margin-top: 77px;
`;
