import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect (() =>{           //This is for the itype feature 
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    })
  },[])

  return (
    <div className= "intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src={process.env.PUBLIC_URL + "/assets/me.png"} alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Demetre Growette</h1>
            <h3>Front-End Web <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}