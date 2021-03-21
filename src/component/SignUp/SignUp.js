import React, { Component } from "react";
import { isStrongPassword } from "validator";
import { debounce } from "lodash";
import axios from "axios";
/* or import _ from "lodash" */

import "./SignUp.css";
export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isError: false,
      errorObj: {},
    };

    this.onChangeDebounce = debounce(this.onChangeDebounce, 1500);
    /* or _.debounce(this.onChangeDebounce.bind(this)) */
  }

  handleSignup = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /* setting a timer from when the user stop typing to when the error message should be displayed */
  onChangeDebounce = () => {
    let errorObj = {};
    if (this.state.password !== this.state.confirmPassword) {
      errorObj.checkConfirmPassword = "Sorry, Your password does not match!";
    }
    if (!isStrongPassword(this.state.password)) {
      errorObj.checkPasswordStrength =
        "Password must be 8 characters long + 1 uppercase + 1 lowercase + special characters !@#$%^&*()";
    }
    if (Object.keys(errorObj).length > 0) {
      this.setState({
        isError: true,
        errorObj: errorObj,
      });
    } else {
      this.setState({
        isError: false,
        errorObj: "",
      });
    }
  };

  handleOnPasswordChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.onChangeDebounce();
      }
    );
  };
  handleOnSubmit = async (event) => {
    event.preventDefault();
    let { firstName, lastName, email, password } = this.state;
    try {
      let result = await axios.post("http://localhost:3001/users/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  showErrorMessageObj = () => {
    let errorMessageArray = Object.values(this.state.errorObj);
    return errorMessageArray.map((errorMessage, index) => {
      return (
        <div key={index} className='alert alert-danger'>
          {errorMessage}
        </div>
      );
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      isError,
    } = this.state;
    return (
      <div className='form-body'>
        <main className='form-signin'>
          {isError && this.showErrorMessageObj()}
          <form onSubmit={this.handleOnSubmit}>
            <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
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
              onChange={this.handleSignup}
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
              onChange={this.handleSignup}
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
              onChange={this.handleSignup}
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
            <label htmlFor='inputConfirmPassword' className='visually-hidden'>
              Confirm Password
            </label>
            <input
              //type="password"
              type='text'
              id='inputConfirmPassword'
              className='form-control'
              placeholder='Confirm Password'
              required
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleOnPasswordChange}
            />
            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign up
            </button>
          </form>
        </main>
        ;
      </div>
    );
  }
}
export default SignUp;
