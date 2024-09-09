import styled from "styled-components";
import { lightTheme } from '../../../themes/Themes';

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.2rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 100%;
  max-width: 450px;
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

export const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${lightTheme.colors.neutro300};
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${lightTheme.colors.neutro300};
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: ${lightTheme.colors.saveColor};
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  opacity: .8;
  transition: .5s;
  &:hover {
    opacity: 1;
  }
`;
