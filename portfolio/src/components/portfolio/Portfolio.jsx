import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className= "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Projects</li>
      </ul>
      <div className="container">
        <div className="item"> {/* Plenty App*/}
          <img src={process.env.PUBLIC_URL + "/assets/plenty.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://plenty-in-the-pantry.herokuapp.com/">Plenty.</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
          <p>This is a Full-Stack recipe app that helps the user find recipes based off the ingredients they currently have in the house.</p>
          <p>Technologies: HTML5, CSS3, JavaScript, React Native, Node.js, Heroku, and Express.js.</p>
        </div>
        <div className="item"> {/* Console this App*/}
          <img src={process.env.PUBLIC_URL + "/assets/consolethis.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Console-This/">Console This</a></h3>
          <h4><a href="https://github.com/Trane7/Console-This">Github Repo</a></h4>
          <p>This app was designed to help the user find any kind of gaming console close to home.</p>
          <p>Technologies: JavaScript, HTML, CSS, MVP, Node.js, Express.js, and APIs.</p>
        </div>
        <div className="item">  {/* Quick Quack Quiz App*/}
          <img src={process.env.PUBLIC_URL + "/assets/quick-quack.png"} alt="" /> {/* this is where you add the project     https://quick-quack-quiz.herokuapp.com/*/} 
          <h3><a href="https://quick-quack-quiz.herokuapp.com/">Quick Quack Quiz</a></h3>
          <h4><a href="https://github.com/Trane7/Quick-Quack-Quiz">Github Repo</a></h4>
          <p>This is a Full-Stack web developed app that was made to help people make quizzes to help them study and to share with others.</p>
          <p>Technologies: JavaScript, HTML, CSS, Handlebars.js, Express.js, Node.js, Heroku, and MVP.</p>
        </div>
        <div className="item">  {/* Don't Forget The Potion Game*/}
          <img src={process.env.PUBLIC_URL + "/assets/potion.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/dont-forget-the-potion/">Don't Forget The Potion!</a></h3>
          <h4><a href="https://github.com/Trane7/dont-forget-the-potion">Github Repo</a></h4>
          <p>Don't Forget the Potion is a fun little game that the user plays through the terminal.</p>
          <p>Technologies: JavaScript, JSON, Jest, and JavaScript.</p>
        </div>
        <div className="item"> {/* Robot Gladiators */}
          <img src={process.env.PUBLIC_URL + "/assets/robot.png"} alt="" /> 
          <h3><a href="https://trane7.github.io/robot-gladiators/">Robot Gladiators</a></h3>
          <h4><a href="https://github.com/Trane7/robot-gladiators">Github Repo</a></h4>
          <p>Robot Gladiators is a prompt based game.
          </p>
          <p>Technologies: JavaScript, HTML, CSS, MVP.</p>
        </div>
        <div className="item"> {/* Budget Tracker App*/}
          <img src={process.env.PUBLIC_URL + "/assets/budget.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://budget-tracker-pwas.herokuapp.com/">Budget Tracker</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
          <p>Budget Tracker is an app that helps the user budget their expenses on a daily basis.</p>
          <p>Technologies: JavaScript, HTML, CSS, PWA.</p>
        </div>
        <div className="item">  {/* Weather App*/}
          <img src={process.env.PUBLIC_URL + "/assets/weather.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Weather-or-not/">Weather App</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
          <p>The Weather App is, well of couse a weather app to tell the user what the current 5-day forcast will be.</p>
          <p>Technologies: JavaScript, HTML, CSS.</p>
        </div>
        
      </div>
    </div>
  )
}