import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCzvXOSYX8tMFq8i9G03uK-2w6c6iTngpU",
  authDomain: "crwn-db-882b3.firebaseapp.com",
  projectId: "crwn-db-882b3",
  storageBucket: "crwn-db-882b3.appspot.com",
  messagingSenderId: "254021969492",
  appId: "1:254021969492:web:5b795a911f814caed6afc1",
  // eslint-disable-next-line
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
// Forces them to choose account
provider.setCustomParameters({ prompt: 'select_account' });
//Provides sign in pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;