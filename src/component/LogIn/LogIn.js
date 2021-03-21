import React, { Component } from "react";

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

  render() {
    const { email, password } = this.state;

    return (
      <div className='form-body'>
        Log In
        <main className='form-signin'>
          <form>
            <h1 className='h3 mb-3 fw-normal'>Please Login</h1>
            <label htmlFor='inputFirstName' className='visually-hidden'>
              Email
            </label>
            <input
              type='text'
              id='inputFirstName'
              className='form-control'
              placeholder='First Name'
              required
              autoFocus
              name='firstName'
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
              onChange={this.handleOnPasswordChange}
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
