import styled, { css } from "styled-components";
import { lightTheme } from '../../../themes/Themes';

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.2rem 1rem;
  background-color: rgba(0, 0, 0, 0.612);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Form = styled.form`
  position: relative;
  background-color: ${lightTheme.colors.neutro100};
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 36%;
  @media (max-width: 1200px){
    width: 50%;
  }
  @media (max-width: 769px){
    width: 60%;
  }
  @media (max-width: 599px){
    width: 80%;
  }

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${lightTheme.colors.deleteColor};
  cursor: pointer;
`;

const InputDefault = css`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${lightTheme.colors.neutro300};
  border-radius: 4px;
  font-size: 1rem;
  &:focus{
    outline-color: ${lightTheme.colors.neutro400};
  }
  @media (max-width: 769px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  ${InputDefault}
`;

export const TextArea = styled.textarea`
  ${InputDefault}
  height: 100px;
  overflow-y: scroll;
  @media (max-width: 769px){
    height: 80px;
  }
`;

export const Button = styled.button`
  ${InputDefault}
  background-color: ${lightTheme.colors.save_linkHover};
  color: #fff;
  border: none;
  margin-bottom: 0;
  cursor: pointer;
  opacity: .8;
  transition: .5s;
  &:hover {
    opacity: 1;
  }
`;
