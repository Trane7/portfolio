import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className= "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Projects</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/plenty.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://plenty-in-the-pantry.herokuapp.com/">Plenty.</a></h3>
          {/* <br/>
          <h4><a href="https://github.com/Trane7/Recipe-app">GH Repo</a></h4> */}
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/consolethis.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="trane7.github.io/console-this/">Console This</a></h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/quick-quack.png"} alt="" /> {/* this is where you add the project     https://quick-quack-quiz.herokuapp.com/*/} 
          <h3><a href="https://quick-quack-quiz.herokuapp.com/">Quick Quack Quiz</a></h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/budget.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://budget-tracker-pwas.herokuapp.com/">Budget Tracker</a></h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/weather.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Weather-or-not/">Weather App</a></h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/virtual.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/virtual-notes/">Virtual Notes</a></h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/schedule.png"} alt="" /> {/* this is where you add the project*/}
          <h3><a href="https://trane7.github.io/Day-to-Remember/">Daily Planner</a></h3>
        </div>
      </div>
    </div>
  )
}