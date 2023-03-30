import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav, WrapperLink, NavLinks, Mains } from './Layout.styled';
import Spiner from '../Spinner/Spiner';

const Layout = () => {
  return (
    <>
      {' '}
      <Header>
        <Nav>
          <WrapperLink>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/movies">Movies</NavLinks>
          </WrapperLink>
        </Nav>
      </Header>
      <Mains>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Mains>
    </>
  );
};
export default Layout;
