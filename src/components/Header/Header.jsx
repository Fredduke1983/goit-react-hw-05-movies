import { NavLink, Outlet } from 'react-router-dom';
import { Header, HeaderNav } from './Header.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <HeaderNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </HeaderNav>
      </Header>
      <Outlet />
    </>
  );
}
