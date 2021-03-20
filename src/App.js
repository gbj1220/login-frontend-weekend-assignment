import React, { Component } from "react";
import MainRouter from "./MainRouter";
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

/* instead of using Switch you can also put exact before path */
export class App extends Component {
  render() {
    return (
      <>
        <MainRouter />
      </>
    );
  }
}

//each file will only contain one export default
export default App;
