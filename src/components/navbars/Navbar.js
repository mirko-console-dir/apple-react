import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink activeClassName="active" className="navbar-link" to="/apple-react">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="navbar-link" to="/apple-react/about">
          About
        </NavLink>
      </nav>
    </>
  );
};
export default Navbar;
