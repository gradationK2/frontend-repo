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
