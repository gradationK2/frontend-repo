import styled from "styled-components";

export const MyReview = styled.div`
  margin-top: 5vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 15px;
`;

export const Hr = styled.hr``;

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

export const MyInfoBox = styled.div`
  padding: 41px 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const MyPhoto = styled.img``;

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

export const Trash = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Delete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding: 5px 25px;

  color: #b1b1b1;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;

  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
`;

export const ReviewBox = styled.div``;

export const Review = styled.div`
  padding: 26px 25px 26px 37px;
  border-bottom: 1px solid #d9d9d9;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FoodName = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  position: relative;
  right: 12px;
`;

export const Circle = styled.img`
  width: 7px;
  height: 7px;
`;

export const Stars = styled.div``;

export const Star = styled.img``;

export const Date = styled.div`
  color: #aaa;

  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  margin-top: 2px;
`;

export const Comment = styled.div`
  color: #1a1a1a;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const PhotoBox = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  overflow-x: scroll;
`;

export const ReviewImg = styled.img``;

export const ReviewMore = styled.div`
  padding: 5px 25px 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;

  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  cursor: pointer;
`;

export const Span = styled.div`
  margin-left: 5px;
  text-decoration: underline;
`;

export const Nodata = styled.div`
  display: flex;
  justify-content: center;
  color: #111111;
`;
