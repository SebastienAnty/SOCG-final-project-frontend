import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Navbar from "./components/common/Navbar";
// import Hero from "./components/home/Hero";
// import Main from "./components/home/Main";
import Footer from "./components/common/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Chat } from "@mui/icons-material";
import GameChat from "./components/home/GameChat";

export const UserContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBdrCw8ywZVNe2OrCWgZaE1DWCSuHTluG0",
  authDomain: "socg-sma.firebaseapp.com",
  databaseURL: `https://socg-sma.web.app/`,
  projectId: "socg-sma",
  storageBucket: "socg-sma.appspot.com",
  messagingSenderId: "3962080397",
  appId: "1:3962080397:web:a257c1055361f7b04626c4",
};

initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoaded(true);
    });
  }, [auth]);

  function SignOut(event) {
    event
      .preventDefault()
      .then(() => {
        setUser(null);
        localStorage.setItem("user", null);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={{ user, setUser, SignOut }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game-chat/:gameId" element={<GameChat />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}
