import "./topbar.scss";
import {GitHub, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><span>DG</span></a>
        </div>
        {/* <h1></h1> */}
        <div className="right">
          <a href="">About</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  )
}