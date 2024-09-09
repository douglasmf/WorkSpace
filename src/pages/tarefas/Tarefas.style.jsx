import styled from "styled-components";
import { lightTheme } from "../../themes/Themes";

export const TarefasPage = styled.div`
  height: calc(100vh - 3.7rem);
  background-color: #dbf46d;
`;

export const TarefasContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto 0 auto;
  padding: 2rem;
  background-color: ${lightTheme.colors.neutro100};
  border-radius: 20px;
  border: 3px solid ${lightTheme.colors.neutro200};
  overflow-y: hidden;
  @media (max-width: 939px){
    background-color: #fff;
    border: none;
  }
  @media (max-width: 450px){
    margin: 0rem auto;
  }
  @media (max-width: 414px){
    padding: 1rem 2rem;
  }
`;

export const Title = styled.h1`
  color: ${lightTheme.colors.neutro900};
  text-align: center;
  @media (max-width: 450px){
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
  color: ${lightTheme.colors.neutro900};
  margin-bottom: 1.5rem;
  @media (max-width: 414px){
    margin-bottom: 0.5rem;
  }
`;


export const TodoList = styled.div`
  position: relative;
  height: 292px;
  overflow-y: ${(props) => props.overFlow ? 'scroll' : 'auto'};
  overflow-x: hidden;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
  p#message{
    text-align: center;
    font-size: 2.2rem;
    font-style: italic;
    margin-top: 2.8rem;
    color: ${lightTheme.colors.neutro900};
  }
  @media (max-width: 450px){
    height: 312px;
  }
`;

export const TarefasEdit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 18%;
  display: ${(props) => props.open ? 'flex':'none'};
  background-color: #fff;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  padding: 2rem 1.5rem;
  border: 2px solid ${lightTheme.colors.neutro200};
  border-radius: 10px;
  .close{
    position: absolute;
    top: 4%;
    right: 2%;
    color: ${lightTheme.colors.deleteColor}; 
    background-color: transparent;
    font-weight: bold;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .inputButton{
    display: flex;
    input{
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
    input:focus{
      outline: 1px solid ${lightTheme.colors.saveColor};
    }
    button{
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border: none;
      background-color: ${lightTheme.colors.saveColor}; 
      color: white;
      cursor: pointer;
      opacity: .8;
      transition:  .5s;
      &:hover {
        opacity: 1
      }
    }
  }
  @media (max-width: 399px){
    height: 24%;
    padding: 2rem 1rem;
  }
  
`;