import styled from "styled-components";

export const Signup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-top: 10vh;
`;

export const Logo = styled.img`
  margin-bottom: 5px;
  max-width: 159px;
`;

export const Text = styled.div`
  font-family: Pretendard;
  color: #686868;
  font-size: 16px;
`;

export const RedText = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const InputDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  height: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #717171;
`;

export const SignupInfo = styled.div`
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;

  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  font-size: 15px;
  color: white;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  border: none;
  border-radius: 30px;
  padding: 11px;
  width: 100%;
  margin: 60px 0;
  cursor: pointer;
`;

export const UsableBtn = styled.div`
  color: #717171;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid #717171;
  border-radius: 39px;
  cursor: pointer;
`;
