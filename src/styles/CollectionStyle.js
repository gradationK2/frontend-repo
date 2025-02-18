import styled from "styled-components";

export const Collection = styled.div`
  padding: 0 25px;
  margin-top: 5vh;
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

export const BadgeBox = styled.div`
  height: 560px;
  border-radius: 8px;
  border: 1px solid var(--trendy-ton, #ff6e30);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  margin-bottom: 10vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Badges = styled.div`
  width: 269px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 30px;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeImg = styled.img`
  width: 75px;
  margin-bottom: 10px;
`;

export const BadgeTitle = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const BadgeInfo = styled.div`
  color: #aaa;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
`;
