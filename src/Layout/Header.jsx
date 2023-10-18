import Play from "../assets/images/PlayImg.png"
import React, { Component } from 'react'

export class Header extends Component {
 state = {}
 render() {
  return(
   <header>
    <div className="header-top">
    <div className="container">
        <div className="header-inner">
            <a href="#" className='header-logo'>
                Creative Movie App    
            </a>
            <ul>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
    </div>
    <div className="min-head">
        <a href="https://uzmovi.com" className="minhead-btn">
            <img src={Play} width={120} height={120} alt="PLay img" />
        </a>
    </div>
   </header>
    )
   }
 }

