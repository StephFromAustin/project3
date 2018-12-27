import React, { Component } from 'react';
import images from '../images/letter.png'

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Shin<span>Dig</span></li>
          </ul>
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Sign-Up</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;