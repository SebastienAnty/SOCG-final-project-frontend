import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBdrCw8ywZVNe2OrCWgZaE1DWCSuHTluG0",
  authDomain: "socg-sma.firebaseapp.com",
  databaseURL: "https://socg-sma-default-rtdb.firebaseio.com",
  projectId: "socg-sma",
  storageBucket: "socg-sma.appspot.com",
  messagingSenderId: "3962080397",
  appId: "1:3962080397:web:a257c1055361f7b04626c4",
});

const auth = firebase.auth();

export default function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}
