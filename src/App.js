import { Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react"
// pages
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
// styles
import "./App.scss";








function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <ul>
        <Link to='/'>
          <li>
            <a href="#!">home </a>
          </li>
        </Link >
        <Link to='about'>
          <li>
            <a href="#!">about </a>
          </li>
        </Link>
        <Link to='contact'>
          <li>
            <a href="#!">contact</a>
          </li>
        </Link>
      </ul>
      <section>



        <Routes>
        
          
            

            <Route path="/" element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
          
        </Routes>
      </section>
    </div >
  )
}

export default App;
