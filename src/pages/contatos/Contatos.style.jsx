import styled from "styled-components";
import { lightTheme } from '../../themes/Themes';

export const ContatosContainer = styled.div`
  max-width: 1100px;
  border-radius: 6px;
  margin: 4rem auto;
  padding: 1.2rem 1.5rem;
  box-shadow: 0px 0px 5px #0000001c;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 1200px) {
    box-shadow: none;
  }
  @media (max-width: 769px){
    margin: 2rem auto;
    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 450px){
    margin: 2rem auto;
    p{
      font-size: 1.5rem;
    }
  }
  
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.8rem;
  color: ${lightTheme.colors.neutro900};
  @media (max-width: 769px){
    font-size: 1.5rem;
  }
  @media (max-width: 450px){
    margin-bottom: 2.5rem;
  } 
`;

export const TabelaContainer = styled.div`
  width: 100%;
  max-height: 508px;
  overflow-y: ${(props) => props.scrolling ? 'scroll' : 'hidden'};
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead{
    position: sticky;
    top: 0;
    left: 0;
    z-index: 600;
  }
  th{
    text-align: left;
    background-color: ${lightTheme.colors.neutro700};
    color: #fff;
    padding: .8rem .9rem;
    font-size: .9rem;
  }
  
  td{
    font-size: .9rem;
    color: #000000;
    padding: .8rem .9rem;
  }
  .acoes{
    border-left: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button{
      border: none;
      background-color: transparent;
      display: flex;
      cursor: pointer;
      font-size: 1.3rem;
      opacity: .8;
      transition: .5s;
    }
    button:hover{
      opacity: 1;
    }
    .edit{
      color: ${lightTheme.colors.editColor};
    }
    .delete{
      color: ${lightTheme.colors.deleteColor};
    }
  }
`;

export const ButtonAdd = styled.button`
  margin-top: 2rem;
  padding: .4rem .8rem;
  border-radius: 6px;
  background-color: ${lightTheme.colors.saveColor};
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  opacity: .9;
  transition: .5s;
  &:hover {
    opacity: 1;
  }
`;
