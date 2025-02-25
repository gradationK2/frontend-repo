import styled from "styled-components";

export const MyPage = styled.div`
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

  width: calc(100% + 74px);
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const MyInfoBox = styled.div`
  padding: 41px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const MyPhoto = styled.img`
  width: 80px;
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const GoEdit = styled.div`
  color: #aaa;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const GoLogin = styled.div`
  color: #818181;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const BadgeBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid var(--trendy-ton, #ff6e30);
  cursor: pointer;
`;

export const MyBadge = styled.img``;

export const BadgeRank = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Rank = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ActivityBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid var(--trendy-ton, #ff6e30);
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
`;

export const Logout = styled.div`
  color: #aaa;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 300px;
`;
