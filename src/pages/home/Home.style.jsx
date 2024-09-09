import styled from "styled-components";
import { lightTheme } from '../../themes/Themes'

export const HomeContainer = styled.div`
  max-width: 1100px;
  margin: 6rem auto;
  padding: 0 1.5rem;
  @media (max-width: 769px){
    margin: 4rem auto;
  }
  @media (max-width: 439px){
    margin: 3rem auto;
  }
`;

export const HomeHeader = styled.div`
  margin-bottom: 6rem;
  @media (max-width: 769px){
    margin-bottom: 4rem;
  }
  @media (max-width: 439px){
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: ${lightTheme.colors.neutro900};
  @media (max-width: 769px){
    font-size: 4rem;
  }
  @media (max-width: 439px){
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  text-align: center;
  color: ${lightTheme.colors.neutro900};
  @media (max-width: 439px){
    font-size: 1.2rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 769px){
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 5px #00000030;
    border-radius: 20px;
    text-align: center;
    h1{
        font-size: 1.8rem;
        color: ${lightTheme.colors.neutro700};
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid ${lightTheme.colors.neutro300};
    }
    p {
        font-size: 1.3rem;
        color: ${lightTheme.colors.neutro600};
        margin-bottom: 2rem;
    }
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        gap: .4rem;
        width: 70%;
        padding: 0.8rem 1rem;
        opacity: .8;
        transition: .5s;
        font-weight: bold;
        color: #fff;
        border-radius: 10px;
    }
    #btnTarefas {
        background-color: ${lightTheme.colors.saveColor};
    }
    #btnNovo {
        background-color: ${lightTheme.colors.completeColor};
    }
    #btnContatos {
        background-color: ${lightTheme.colors.deleteColor};
    }
    a:hover {
        opacity: 1;
    }

    @media (max-width: 1048px){
        
        h1 {
            font-size: 1.6rem;
        }
        p {
            font-size: 1.2rem;
        }
        
    }
    @media (max-width: 769px){
        width: 90%;
        a{
          width: 30%;
        }
    }
    @media (max-width: 440px){
      svg {
        display: none;
      }
    }
`;