import React, { Component } from "react"
import "./header.css"
 
class Header extends Component {
  render(){
    return (
      <div className = "d-flex bd-highlight head">
        <div className = "p-2 flex-fill bd-highlight">
          <h2>Mario Kart Clicky Game!</h2>
        </div>

        <div className ="p-2 flex-fill bd-highlight" id="instructions">
          <p> Click on an image to earn points, click it twice and you LOSE!</p>
        </div>

        <div className = "p-2 flex-fill bd-highlight">
          <h2 id="status"> {this.props.status} </h2>
        </div>

        <div className = "p-2 flex-fill bd-highlight">
          <div className = "p-2 flex-fill bd-highlight">
            <h3 id="highscore"> High Score: {this.props.highScore}</h3>\
          </div>
              <hr></hr>
          <div className = "p-2 flex-fill bd-highlight"> 
            <h3 id="currentscore"> Current Score: {this.props.currentScore}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Header