import React from "react";
import { Navigate } from "react-router-dom";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//Google Auth
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
      this.setState({ redirect: true })
    } catch (e) {
      console.log(e);
    }


  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/shop" />
    }
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name="email"
            type="email"
            handleChange={ this.handleChange }
            value={ this.state.email }
            label="Email"
            required />
          <FormInput
            name="password"
            type='password'
            label="Password"
            value={ this.state.password }
            handleChange={ this.handleChange }
            required />

          <div className="buttons">
            <CustomButton type='Submit'>Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={ signInWithGoogle }>{ ' ' } Sign in with Google { ' ' }</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;