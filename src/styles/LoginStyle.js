import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  margin-top: 20vh;
`;

export const Logo = styled.img`
  margin-bottom: 5vh;
  max-width: 300px;
`;

export const Text = styled.div`
  font-family: Pretendard;
  color: #686868;
  font-size: 16px;
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
  /* 자동 완성된 상태에서 배경 제거 */
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #f7f7f7 inset !important;
    -webkit-text-fill-color: black !important;
  }

  /* 자동 완성 시 포커스 상태에서도 유지 */
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #f7f7f7 inset !important;
    -webkit-text-fill-color: black !important;
  }
`;

export const Check = styled.input``;

export const CheckBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 15px;
`;

export const Button = styled.button`
  font-size: 15px;
  color: white;
  background: var(--trendy-ton, linear-gradient(90deg, #ff6e30 0%, #e9402b 100%));
  border: none;
  border-radius: 30px;
  padding: 11px;
  width: 100%;
  margin: 40px 0;
  cursor: pointer;
`;

export const SocialLoginBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #aaa;
  padding-top: 15px;
  margin-top: 15px;
`;

export const SocialLogin = styled.button`
  height: 47px;
  background-color: white;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SocialImg = styled.img``;

export const goSignup = styled.div`
  cursor: pointer;
`;
