import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase.utils"
import { createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null;
  //Is the user logged in? Set it in state
  componentDidMount() {

    const { setCurrentUser } = this.props;
    // console.log(setCurrentUser)

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });

      } else {
        setCurrentUser(userAuth);
      }
      // this.setState({ currentUser: user })
      // createUserProfileDocument(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      < div >
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/shop/" element={ <ShopPage /> } />
          <Route path="/signin" element={ <SignInAndSignOutPage /> } />
        </Routes>
      </div >
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
