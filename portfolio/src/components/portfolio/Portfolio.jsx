// import { Button } from "bootstrap";
import "./portfolio.scss";
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   bgcolor: 'background.paper',
//   p: 4,
// };

export default function Portfolio() {

  const [modal1, setOpen] = React.useState(false);
  const handle1 = () => setOpen(true);
  const close1 = () => setOpen(false);

  const [modal2, setOpen2] = React.useState(false);
  const handle2 = () => setOpen2(true);
  const close2 = () => setOpen2(false);

  const [modal3, setOpen3] = React.useState(false);
  const handle3 = () => setOpen3(true);
  const close3 = () => setOpen3(false);
  
  const [modal4, setOpen4] = React.useState(false);
  const handle4 = () => setOpen4(true);
  const close4 = () => setOpen4(false); 


  return (
    <div className= "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Projects</li>
      </ul>
      <div className="container">
      <div className="item"> {/* CTV Radio Modal*/}   
          <Button onClick={handle1}><img src={process.env.PUBLIC_URL + '/assets/ctvlogosm.jpg'} className='ctv-btn'></img></Button>
          <Modal open={modal1} onClose={close1} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <div className="popout">
                <button className="xb" onClick={close1}> X </button>
                <br></br>
                <img src={process.env.PUBLIC_URL + "/assets/ctvlogosm.jpg"} alt="" /> {/* this is where you add the project*/}
                <br></br>
                <div>
                <button className="btn1"><a href="https://trane7.github.io/ctvradioo/" className="link1">CTV Radio</a></button>
                <button className="btn2"><a href="https://github.com/Trane7/ctvradioo" className="link2">Github Repo</a></button>
                </div>
                <p>CTV Radio is an independent radio station website that will soon have merch you can purchase as well.</p>
                <p>Technologies: React App, React JS/DOM,  CSS, FontAwesome, JQuery, iTyped.</p>
              </div>
            </Modal>
        </div>
      <div className="item"> {/* Plenty Modal*/}   
          <Button onClick={handle2} data-overlay='pro1'><img src={process.env.PUBLIC_URL + '/assets/plenty.png'} className='plenty-btn'></img></Button>
          <Modal open={modal2} onClose={close2} id='plenty' aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <div className="popout">
                <button className="xb" onClick={close2}> X </button>
                <br></br>
                <img src={process.env.PUBLIC_URL + "/assets/plenty.png"} alt="" /> {/* this is where you add the project*/}
                <br></br>
                <div>
                <button className="btn1"><a href="https://plenty-in-the-pantry.herokuapp.com/" className="link1">Plenty.</a></button>
                <button className="btn2"><a href="https://github.com/Trane7/Recipe-app" className="link2">Github Repo</a></button>
                </div>
                <p>This is a Full-Stack recipe app that helps the user find recipes based off the ingredients they currently have in the house.</p>
                <p>Technologies: HTML5, CSS3, JavaScript, React Native, Node.js, Heroku, and Express.js.</p>
              </div>
            </Modal>
        </div>
      <div className="item"> {/* Console This Modal*/}   
          <Button onClick={handle3} data-overlay='pro1'><img src={process.env.PUBLIC_URL + '/assets/consolethis.png'} className='console-btn'></img></Button>
          <Modal open={modal3} onClose={close3} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <div className="popout">
                <button className="xb" onClick={close3}> X </button>
                <br></br>
                <img src={process.env.PUBLIC_URL + "/assets/consolethis.png"} alt="" /> {/* this is where you add the project*/}
                <br></br>
                <div>
                <button className="btn1"><a href="https://trane7.github.io/Console-This/" className="link1">Console This</a></button>
                <button className="btn2"><a href="https://github.com/Trane7/Console-This" className="link2">Github Repo</a></button>
                </div>
                <p>This app was designed to help the user find any kind of gaming console close to home.</p>
                <p>Technologies: JavaScript, HTML, CSS, MVP, Node.js, Express.js, and APIs.</p>
              </div>
            </Modal>
        </div>
      <div className="item"> {/* Quick Quack Quiz Modal*/}   
          <Button onClick={handle4} data-overlay='pro1'><img src={process.env.PUBLIC_URL + '/assets/quick-quack2.png'} className='qq-btn'></img></Button>
          <Modal open={modal4} onClose={close4} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <div className="popout">
                <button className="xb" onClick={close4}> X </button>
                <br></br>
                <img src={process.env.PUBLIC_URL + "/assets/quick-quack2.png"} alt="" /> {/* this is where you add the project*/}
                <br></br>
                <div>
                <button className="btn1"><a href="https://quick-quack-quiz.herokuapp.com/" className="link1">Quick-Quack</a></button>
                <button className="btn2"><a href="https://github.com/Trane7/Quick-Quack-Quiz" className="link2">Github Repo</a></button>
                </div>
                <p>This is a Full-Stack web developed app that was made to help people make quizzes to help them study and to share with others.</p>
                <p>Technologies: JavaScript, HTML, CSS, Handlebars.js, Express.js, Node.js, Heroku, and MVP.</p>
              </div>
            </Modal>
        </div>
      </div>
    </div>
  )
}










// 