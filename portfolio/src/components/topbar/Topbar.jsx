import "./topbar.scss"
import {GitHub, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Portfolio</a>
          <div className="itemContaner"> 
          <GitHub className="icon" /> {/* add icons here*/}
          <a href="https://github.com/Trane7">Github Prof</a>
          </div>
          <div className="itemContaner"> 
          <Mail className="icon" /> {/* add icons here*/}
          <span>dgrowette@gmail.com</span>
          </div>
        </div>
        {/* <h1></h1> */}
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}