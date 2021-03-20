import React, { Component } from "react";
import MainRouter from "./MainRouter";

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
