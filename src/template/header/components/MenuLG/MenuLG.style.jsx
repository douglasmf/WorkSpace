import styled from "styled-components";
import {lightTheme} from '../../../../themes/Themes'

export const MenuStyle = styled.nav`
  display: flex;
  gap: 4rem;
  a {
    font-weight: bold;
    letter-spacing: .1rem;
    color: ${lightTheme.colors.neutro800};
    transition: 0.8s;
  }
  a:hover {
    color: ${lightTheme.colors.saveColor};
  }
  @media (max-width: 768px){
    display: none;
  }
`;