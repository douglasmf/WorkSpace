import styled from "styled-components";
import { lightTheme } from '../../../../themes/Themes'



export const PesquisaStyle = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid ${lightTheme.colors.neutro300};
  form {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .pesquisaContain{
      width: 55%;
    }
  }
  input {
    width: 65%;
    padding: 0.6rem 0.8rem;
    border: 1px solid ${lightTheme.colors.neutro300};
    border-radius: 10px 0px 0px 10px;
    margin-right: -0.2rem;
    outline: none;
  }
  input:focus{
    box-shadow: inset 0 0 0 2px ${lightTheme.colors.neutro400}; 
  }
  button {
    padding: 0.5rem 0.8rem;
    border-radius: 0px 10px 10px 0px;
    background-color: ${lightTheme.colors.neutro700};
    cursor: pointer;
    svg{
      color: #fff;
    }
  }
  select {
    width: 25%;
    padding: 0.6rem 0.8rem;
    border: 1px solid ${lightTheme.colors.neutro300};
    border-radius: 10px;
    margin-top: .5rem;
    outline: none;
  }

  select:focus{
    box-shadow: inset 0 0 0 2px ${lightTheme.colors.neutro400};
     
  }
 
  @media (max-width: 450px){
    form {
      flex-direction: column;
      align-items: flex-start;
      .pesquisaContain{
      width: 100%;
      }
    }
    input{
      width: 70%;
    }
    select{
      width: 35%;
    }
  }
  @media (max-width: 414px){
    margin-top: 1rem;
  }
`;

