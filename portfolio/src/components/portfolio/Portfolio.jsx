import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className= "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Projects</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="./assets/plenty.png" alt="" /> {/* this is where you add the project*/}
          <h3>Plenty.</h3>
        </div>
        <div className="item">
          <img src="./assets/consolethis.png" alt="" /> {/* this is where you add the project*/}
          <h3>Console This</h3>
        </div>
        <div className="item">
          <img src="./assets/quick-quack.png" alt="" /> {/* this is where you add the project     https://quick-quack-quiz.herokuapp.com/*/} 
          <h3>Quick Quack Quiz</h3>
        </div>
        <div className="item">
          <img src="./assets/budget.png" alt="" /> {/* this is where you add the project*/}
          <h3>Budget Tracker</h3>
        </div>
        <div className="item">
          <img src="./assets/weather.png" alt="" /> {/* this is where you add the project*/}
          <h3>Weather App</h3>
        </div>
        <div className="item">
          <img src="./assets/virtual.png" alt="" /> {/* this is where you add the project*/}
          <h3>Virtual Notes</h3>
        </div>
        <div className="item">
          <img src="./assets/schedule.png" alt="" /> {/* this is where you add the project*/}
          <h3>Daily Planner</h3>
        </div>
      </div>
    </div>
  )
}