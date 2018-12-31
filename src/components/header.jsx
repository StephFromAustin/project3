import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Create, Plan,< br/> Party.</h1>
            <div>
              <p>Get your ShinDigs' in order. </p>
              <div><a className="contact" href="#">Login</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;