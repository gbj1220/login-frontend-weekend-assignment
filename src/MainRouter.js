import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./component/SignUp/SignUp";
import LogIn from "./component/LogIn/LogIn";
import Home from "./component/Home";

import Navbar from "./component/Navbar/Navbar";
/* can export an object here */
const MainRouter = (props) => {
  console.log(props);
  return (
    <Router>
      <Navbar user={props.user} />
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
