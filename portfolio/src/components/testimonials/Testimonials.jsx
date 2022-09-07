import { GitHub, Mail, Resume } from "@material-ui/icons";
import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className= "testimonials" id="testimonials">
        <h1>Contact</h1>
        <h2><Mail /><span>Email:</span></h2><p>Dgrowette@gmail.com</p>
        <h2><GitHub className="github"/><span>GitHub:</span></h2><button><a href="https://github.com/Trane7">https://github.com/Trane7</a></button>
        <h2><span>Resume:</span></h2><button><a href="https://docs.google.com/document/d/1Rl9pXG5k9HlEfBj2H5fiDfvbMp3aPS6vNDCwy3IiuS8/edit?usp=sharing">Link</a></button>
        <p><span></span></p>
    </div>

        
  )
}





{/* <a href="https://docs.google.com/document/d/1Rl9pXG5k9HlEfBj2H5fiDfvbMp3aPS6vNDCwy3IiuS8/edit?usp=sharing">Link To Resume</a> */}