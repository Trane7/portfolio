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
          <p> This is a recipe app that uses: HTML5, CSS3, JavaScript, React Native, Node.js, and Express.js.</p>
        </div>
        <div className="item"> {/* Console this App*/}
          <img src={process.env.PUBLIC_URL + "/assets/consolethis.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Console-This/">Console This</a></h3>
          <h4><a href="https://github.com/Trane7/Console-This">Github Repo</a></h4>
          <p></p>
        </div>
        <div className="item">  {/* Quick Quack Quiz App*/}
          <img src={process.env.PUBLIC_URL + "/assets/quick-quack.png"} alt="" /> {/* this is where you add the project     https://quick-quack-quiz.herokuapp.com/*/} 
          <h3><a href="https://quick-quack-quiz.herokuapp.com/">Quick Quack Quiz</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
          <p></p>
        </div>
        <div className="item"> {/* Budget Tracker App*/}
          <img src={process.env.PUBLIC_URL + "/assets/budget.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://budget-tracker-pwas.herokuapp.com/">Budget Tracker</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
          <p></p>
        </div>
        <div className="item">  {/* Weather App*/}
          <img src={process.env.PUBLIC_URL + "/assets/weather.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Weather-or-not/">Weather App</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
        </div>
        <div className="item">  {/* Don't Forget The Potion Game*/}
          <img src={process.env.PUBLIC_URL + "/assets/potion.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/dont-forget-the-potion/">Don't Forget The Potion!</a></h3>
          <h4><a href="https://github.com/Trane7/Recipe-app">Github Repo</a></h4>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/schedule.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Day-to-Remember/">Daily Planner</a></h3>
          <h4><a href="https://github.com/Trane7/Day-to-Remember">Github Repo</a></h4>
        </div>
      </div>
    </div>
  )
}