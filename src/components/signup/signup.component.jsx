import React from "react";
import "./signup.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }


    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={ displayName }
            onChange={ this.handleChange }
            required />
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={ this.handleChange }
            value={ email }
            required />
          <FormInput
            type="password"
            name="password"
            label='Password'
            value={ password }
            onChange={ this.handleChange }
            required />
          <FormInput
            type="password"
            name="confirmPassword"
            label='Confirm Password'
            value={ confirmPassword }
            onChange={ this.handleChange }
            required />
          <CustomButton type='submit'>REGISTER</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp