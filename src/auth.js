import C from './constants'

const auth = {
  login: () => {
    // Login with Facebook
    const facebookProvider = new C.FIREBASE.auth.FacebookAuthProvider();
    C.FIREBASE.auth().signInWithPopup(facebookProvider);
  },
  logout: () => {
    // Sign out of Firebase.
    C.FIREBASE.auth().signOut();
  }
}

export default auth;
