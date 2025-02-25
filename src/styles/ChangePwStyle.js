import styled from "styled-components";

export const ChangePw = styled.div`
  margin-top: 2vh;
  padding: 0 25px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 164px;
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

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: calc(100% - 40px);
  height: 20px;
  border: none;
  border-radius: 30px;
  outline: none;
  background-color: #f7f7f7;
  padding: 10px 20px;
  font-size: 16px;
`;

export const Text = styled.div`
  font-family: Pretendard;
  color: #686868;
  font-size: 16px;
`;

export const Button = styled.div`
  width: 342px;
  height: 44px;
  border-radius: 8px;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 77px;
  cursor: pointer;
`;
