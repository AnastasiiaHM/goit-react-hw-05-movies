import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  border-bottom: 2px solid #4e4d4d;
  width: 100%;
  height: 70px;
  background-color: #242323;
`;
export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 20px 0px;
  max-width: 100%;
`;
export const WrapperLink = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 300px;
`;
export const NavLinks = styled(NavLink)`
  padding: 5px 16px;
  font-size: 24px;
  border: 1px solid #fff;
  color: #eaf869;
  background-color: rgba(60, 60, 61, 0.3);
  text-decoration: none;
  border-radius: 4px;
  &.active {
    color: #faef51;
    background-color: rgba(190, 190, 206, 0.3);
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #f5bf10;
  }
`;
export const Mains = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #38383847;
`;
