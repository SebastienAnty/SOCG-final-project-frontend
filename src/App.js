import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import { Login } from "./components/Login";
import Hero from "./components/home/Hero";
import Main from "./components/home/Main";
import Footer from "./components/common/Footer";
import Games from "./components/games";
import { initializeApp } from "@firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBdrCw8ywZVNe2OrCWgZaE1DWCSuHTluG0",
  authDomain: "socg-sma.firebaseapp.com",
  databaseURL: "https://socg-sma-default-rtdb.firebaseio.com",
  projectId: "socg-sma",
  storageBucket: "socg-sma.appspot.com",
  messagingSenderId: "3962080397",
  appId: "1:3962080397:web:a257c1055361f7b04626c4",
});

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <nav className="App">
            <h1>
              <Navbar />
              <Hero />
              <Games />
              <Main />
              <Footer />
            </h1>
          </nav>
        </Routes>
      </Router>
    </>
  );
}
