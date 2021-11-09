import './App.css';
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Main from "./components/home/Main";
import Footer from './components/common/Footer';



export default function App() {
  return (
    <>
      <nav className="App">
        <h1>
          <Navbar />&nbsp;
          <Hero />
          <Main />
          <Footer /> 
        </h1>
      </nav>
    </>
  );
}

