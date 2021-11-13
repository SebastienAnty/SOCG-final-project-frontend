import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socg-sma-default-rtdb.firebaseio.com",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

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
