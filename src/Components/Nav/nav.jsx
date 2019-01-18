import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Shin<span>Dig</span></li>
          </ul>
          <ul>
              <li><a href="#">About</a></li>
              <button><li><a href="./SignUp/">Sign-Up</a></li></button>
          </ul>
      </nav>
    );
  }
}

export default Nav;