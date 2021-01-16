import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  :first-child {
    margin-bottom: 30px;
  }
`;

export const AuthBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.02);
`;

export const GlobalStyles = createGlobalStyle`
    ${reset}
   *{
    box-sizing: border-box;
     padding: 0;
     margin: 0;
   }
`;
