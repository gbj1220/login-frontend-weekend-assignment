import React, { Component } from "react";
import MainRouter from "./MainRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class App extends Component {
  state = {
    user: null,
  };
  render() {
    return (
      <>
        <ToastContainer j />
        <MainRouter user={this.state.user} />
      </>
    );
  }
}

//each file will only contain one export default
export default App;
