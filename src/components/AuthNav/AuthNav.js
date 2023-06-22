import { Link, NavList } from './AuthNav.styled';

export const AuthNav = () => (
  <NavList>
    <li>
      <Link to="register">Registration</Link>
    </li>
    <li>
      <Link to="login">Login</Link>
    </li>
  </NavList>
);
