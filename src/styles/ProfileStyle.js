import styled from "styled-components";

export const Profile = styled.div`
  margin-top: 5vh;
`;

export const section = styled.div`
  padding: 16px 15px;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 37px;
`;

export const Goback = styled.img`
  width: 24px;
  margin-right: 101px;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.img`
  margin-bottom: 16px;
`;

export const SmallBtn = styled.div`
  color: #686868;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  width: 116px;
  height: 27px;
  border-radius: 8px;
  border: 1px solid rgba(170, 170, 170, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const InputBox = styled.div`
  padding: 0 25px;

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
  margin: 181px 25px 20px;
  width: 342px;
  height: 44px;
  border-radius: 8px;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
