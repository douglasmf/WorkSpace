import styled from "styled-components";
import { lightTheme } from '../../../../themes/Themes'

export const FormContainer = styled.div`
  
`;

export const Formulario = styled.form`
  input {
    width: 78%;
    padding: 0.6rem 0.8rem;
    border: 1px solid ${lightTheme.colors.neutro300};
    border-radius: 4px;
    outline: none;
    transition: .8s;
    &:focus, &:hover{
      border: 2px solid ${lightTheme.colors.neutro400};
    }
  }
  button {
    padding: .6rem 1rem;
    margin-left: .5rem;
    background-color: ${lightTheme.colors.save_linkHover};
    border: none;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    opacity: .8;
    transition: .4s;
    border-radius: 6px;
    margin-top: 1rem;
  }
  button:hover {
    opacity: 1;
  }
  @media (max-width: 399px){
    input{
      width: 74%;
    }
  }
`;