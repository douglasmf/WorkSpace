import styled from "styled-components";
import { lightTheme } from '../../../themes/Themes'

export const FormContainer = styled.div`
  display: ${(props) => props.open ? 'flex' : 'none'};
  position: absolute;
  top: 28%;
  margin: 0 30rem;
  padding: 4rem 3rem 3rem 3rem;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #0000001c;
  z-index: 9999;
  @media (max-width: 450px){
    box-shadow: 0px 0px 5px #0000001c;
    padding: 1.5rem 2rem 2rem 2rem;
  }
  @media (max-width: 1400px){
    margin: 0 20rem;
  }
  @media (max-width: 1048px){
    margin: 0 10rem;
  }

  @media (max-width: 769px){
    margin: 0 3rem;
  }
  
`;

export const Formulario = styled.form`
  input{
    width:100%;
    padding: .6rem .4rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: 1px solid ${lightTheme.colors.neutro500};
    background-color: ${lightTheme.colors.neutro100};
    outline: none;
    
  }
  input::placeholder{
    color: ${lightTheme.colors.neutro500};
  }
  input:focus{
    background-color: #fff;
  }
  button{
    padding: .3rem .6rem;
    font-size: 1em;
    color: #fff;
    font-weight: bold;
    background-color: ${lightTheme.colors.saveColor};
    border-radius: 6px;
    border: none;
    transition: .5s;
    cursor: pointer;
  }
  button:hover{
    opacity: 1;
  }
`;

export const closeButton = styled.button`
  position: absolute;
  top: 4%;
  right: 4%;
  border: none;
  background-color: transparent;
  font-size: 1.4em;
  font-weight: bold;
  color: ${lightTheme.colors.neutro900};
  cursor: pointer;
  opacity: .8;
  transition: .5s;
  &:hover{
    opacity: 1;
  }
`;