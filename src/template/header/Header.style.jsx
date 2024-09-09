import styled from "styled-components";
import {lightTheme} from '../../themes/Themes'

export const HeaderStyle = styled.header`
  padding: .8rem 0;
  background-color: #fff;
  border-bottom: 1px solid ${lightTheme.colors.neutro300};
`;

export const Navbar = styled.nav`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;