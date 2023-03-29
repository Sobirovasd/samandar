/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <NavLink to="/">Product app</NavLink>
      <NavLink to="/cart">Basket</NavLink>
    </div>
  );
};

export default Navbar;
