import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

import Home from "./component/Home";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
/* can export an object here */
const MainRouter = () => {
  return (
    <Router>
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

      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
