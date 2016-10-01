import C from './constants'

const auth = {
  login: (provider) => {
    // Login with Facebook or Google
    let authProvider = null;
    switch(provider) {
      case 'facebook':
        authProvider = new C.FIREBASE.auth.FacebookAuthProvider();
        break;
      case 'google':
        authProvider = new C.FIREBASE.auth.GoogleAuthProvider();
        break;
      default:
        authProvider = null;
    }
    C.FIREBASE.auth().signInWithPopup(authProvider);
  },
  logout: () => {
    // Sign out of Firebase.
    C.FIREBASE.auth().signOut();
  }
}

export default auth;
