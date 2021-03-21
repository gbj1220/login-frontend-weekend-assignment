import React, { Component } from "react";
import axios from "axios";
import { toSafeInteger } from "lodash";
import { ToastContainer, toast } from "react-toastify";

export class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleLogin = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await axios.post("http://localhost:3001/users/log-in", {
        email: this.state.email,
        password: this.state.password,
      });

      console.log(result);
    } catch (e) {
      console.log(e.response.data);
      toast.error(e.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: "green",
      });
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='form-body'>
        <main className='form-signin'>
          <form onSubmit={this.handleSubmit}>
            <h1
              className='h3 mb-3 fw-normal'
              style={{ textAlign: "center", color: "skyBlue" }}
            >
              Please Login
            </h1>
            <label htmlFor='inputFirstName' className='visually-hidden'>
              Email
            </label>
            <input
              type='text'
              id='inputEmail'
              className='form-control'
              placeholder='Email Address'
              required
              autoFocus
              name='email'
              value={email}
              onChange={this.handleLogin}
            />

            <label htmlFor='inputPassword' className='visually-hidden'>
              Password
            </label>
            <input
              //type="password"
              type='text'
              id='inputPassword'
              className='form-control'
              placeholder='Password'
              required
              name='password'
              value={password}
              onChange={this.handleLogin}
            />
            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Login
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default LogIn;
