import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import {GitHub, Mail} from "@material-ui/icons";

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
        <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Demetre Growette</h1>
            <h3>Front-End Web <span ref={textRef}></span></h3>
            <div className="itemContaner"> 
            <a href="https://docs.google.com/document/d/1Rl9pXG5k9HlEfBj2H5fiDfvbMp3aPS6vNDCwy3IiuS8/edit?usp=sharing">
            <button className="resume">Hire Me</button>
            </a>
            {/* <GitHub className="icon" /> add icons here */}
            <a href="https://github.com/Trane7">
            <button><GitHub className="icon" />GitHub</button>
            </a>
            <h3 className="email"><Mail className="mail" />Dgrowette@gmail.com</h3>
            
            
            </div>
          </div>
        </div>
        <div className="right">
        <div className="imgContainer">
            <img src={process.env.PUBLIC_URL + "/assets/me2.png"} alt=""/>
          </div>
         
        </div>
    </div>
  )
}