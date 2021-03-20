import React, { Component } from "react";
import "./SignUp.css";
export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isError: false,
    errorMessage: "",
  };

  handleSignUp = (event) => {
    console.log(13, this.state);
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log(19, this.state);

        if (this.state.password !== this.state.confirmPassword) {
        }
      }
    );
    console.log(22, this.state);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className='form-body'>
        <main className='form-signin'>
          <form onSubmit={this.handleOnSubmit}>
            <h1 style={{ textAlign: "center" }} className='h3 mb-3 fw-normal'>
              Please Sign Up
            </h1>
            <label htmlFor='inputFirstName' className='visually-hidden'>
              First Name
            </label>
            <input
              type='text'
              id='inputFirstName'
              className='form-control'
              placeholder='First Name'
              required
              autoFocus
              name='firstName'
              value={firstName}
              onChange={this.handleSignUp}
            />

            <label htmlFor='inputLastName' className='visually-hidden'>
              Last Name
            </label>
            <input
              type='text'
              id='inputLastName'
              className='form-control'
              placeholder='Last Name'
              required
              autoFocus
              name='lastName'
              value={lastName}
              onChange={this.handleSignUp}
            />

            <label htmlFor='inputEmail' className='visually-hidden'>
              Email address
            </label>
            <input
              type='email'
              id='inputEmail'
              className='form-control'
              placeholder='Email address'
              required
              autoFocus
              name='email'
              value={email}
              onChange={this.handleSignUp}
            />
            <label htmlFor='inputPassword' className='visually-hidden'>
              Password
            </label>
            <input
              // type='password'
              type='text'
              id='inputPassword'
              className='form-control'
              placeholder='Password'
              required
              name='password'
              value={password}
              onChange={this.handleSignUp}
            />

            <label htmlFor='inputConfirmPassword' className='visually-hidden'>
              Confirm Password
            </label>
            <input
              // type='password'
              type='text'
              id='inputConfirmPassword'
              className='form-control'
              placeholder='Confirm Password'
              required
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleSignUp}
            />

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign Up
            </button>
          </form>
        </main>
        ;
      </div>
    );
  }
}
export default SignUp;
