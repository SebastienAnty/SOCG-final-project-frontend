// import React from "react";
// import "./App.css";

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// firebase.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://socg-sma-default-rtdb.firebaseio.com",
// });

// const auth = firebase.auth();

// export default function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={signInWithGoogle}>Sign in with Google</button>;
// }

// export default function SignOut() {
//   return auth.currentUser && (
//     <button onClick={() => auth.signOut()}>Sign out</button>
//   )
// }
