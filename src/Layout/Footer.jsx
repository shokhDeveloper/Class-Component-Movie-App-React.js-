import Play from "../assets/images/PlayImg.png"
import React, { Component } from "react";

export class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
          <div className="min-head">
          <div className="container">
            
            <a href="https://uzmovi.com" className="minhead-btn">
              <img src={Play} width={120} height={120} alt="PLay img" className="minhead-img" />
            </a>
            </div>
          </div>
       
      </footer>
    );
  }
}
