import './App.css';
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from './components/common/Footer';



export default function App() {
  return (
    <>
      <nav className="App">
        <h1>
          <Navbar />
          <Hero />
          <Main />
          <Footer /> 
        </h1>
      </nav>
    </>
  );
}

