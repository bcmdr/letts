import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjl-oobAuxT-1TIrO3Gmrc1t178KnY0QI",
    authDomain: "letts-2c1be.firebaseapp.com",
    databaseURL: "https://letts-2c1be.firebaseio.com",
    storageBucket: "letts-2c1be.appspot.com",
    messagingSenderId: "832641843338"
  };
firebase.initializeApp(config);

const C = {
  FIREBASE: firebase
}

export default C;
