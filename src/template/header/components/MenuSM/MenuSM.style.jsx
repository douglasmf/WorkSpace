import styled from "styled-components";
import { lightTheme } from "../../../../themes/Themes";

export const MenuStyle = styled.nav`
  position: absolute;
  top: 0;
  left: ${props => props.openingMenu ? '0' : '-100%'};
  width: 100%;
  padding: 1.5rem;
  background-color: ${lightTheme.colors.neutro800};
  transition: .4s;
  z-index: 1000;
  .logo {
    color: #fff;
  }
  @media (min-width: 769px){
    display: none;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #fff;
  button {
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2.5rem 0 1rem 0;
    
    a {
        color: #fff;
        font-weight: bold;
        font-size: 1.1rem;
        letter-spacing: .1rem;
    }
`;
