import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm'>
      <p className='h5 my-0 me-md-auto fw-normal'>
        <Link to='/'>Code Immersives</Link>
      </p>
      <nav className='my-2 my-md-0 me-md-3'>
        <NavLink
          exact
          className='p-2'
          // activeStyle={{ color: "red" }}
          activeClassName='active-class-style'
          to='/'
        >
          Home
        </NavLink>
      </nav>
      <NavLink
        className='btn btn-outline-primary'
        activeStyle={{ color: "yellow" }}
        to='/sign-up'
      >
        Sign Up
      </NavLink>
      <NavLink
        className='btn btn-outline-primary'
        activeStyle={{ color: "yellow" }}
        to='/log-in'
      >
        Login
      </NavLink>
    </header>
  );
}

export default Navbar;
