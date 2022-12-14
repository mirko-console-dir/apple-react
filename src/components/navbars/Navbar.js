import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink activeClassName="active" className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="navbar-link" to="/about">
          About
        </NavLink>
      </nav>
    </>
  );
};
export default Navbar;
