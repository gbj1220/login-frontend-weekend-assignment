import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact activeStyle={{ color: "red" }} to='/'>
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} to='/sign-up'>
        Sign Up
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} to='/log-in'>
        Log In
      </NavLink>
    </nav>
  );
}

export default Navbar;
