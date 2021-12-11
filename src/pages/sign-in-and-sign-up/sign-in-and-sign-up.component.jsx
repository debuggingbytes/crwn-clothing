import React from "react";
import './sign-in-and-sign-up.styles.scss';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignOutPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignOutPage