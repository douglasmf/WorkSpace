import styled from "styled-components";
import {lightTheme} from '../../../../themes/Themes'

export const LogoStyle = styled.div` 
  h1 {
    display: flex;
    align-items: center;
    color: ${(props) => (props.isMenuSM ? '#fff' : lightTheme.colors.neutro800)};
  }
  #notebook {
    font-size: 1.25rem;
  }
  #pen {
    font-size: 0.875rem;
    transform: translateX(-0.5rem);

  }
  span {
    font-size: 1.5rem;
    letter-spacing: .1rem;
  }
`;