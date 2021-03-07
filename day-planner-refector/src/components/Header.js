import React from 'react';
import '../styles/App.css';
import Clock from './Clock'

function Header () {

    return(
        <div className = "header">
          <header className="jumbotron">
            <h1 className="display-3">Work Day Scheduler</h1>
            <h2 className="lead">A simple calendar app for scheduling your work day</h2>
            <p id="currentDay" className="lead"></p>
            <div className="container">
              <p className= "date"></p>
              <p className="time"></p>
            </div>
          </header>
        </div>
    )
}

export default Header;