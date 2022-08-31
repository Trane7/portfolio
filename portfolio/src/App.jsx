import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
// import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from './components/Modal/Modal';





function App() {

  const [openModal, setOpenModal] = useState(false);

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/> {/* this is the About Me section */}      
        <Portfolio/>
        {/* <ModalDialog /> */}
        <Testimonials/> {/* this is the Resume section */}
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default App;
