import { firebase, FacebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type:'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(FacebookAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

// export const startLoginFacebook = () => {
//   return () => {
//     return firebase.auth().signInWithPopup(FacebookAuthProvider);
//   }
// }