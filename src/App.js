import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase.utils"
import { createUserProfileDocument } from "./firebase/firebase.utils"


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //Is the user logged in? Set it in state
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });

      } else {
        this.setState({ currentUser: userAuth });
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
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/shop/" element={ <ShopPage /> } />
          <Route path="/signin" element={ <SignInAndSignOutPage /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
