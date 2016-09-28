import C from './constants'

const auth = {
  login: () => {
    // Login with Facebook
    const facebookProvider = new C.FIREBASE.auth.FacebookAuthProvider();
    C.FIREBASE.auth().signInWithPopup(facebookProvider);
  }
}

export default auth;
