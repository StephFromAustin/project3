import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import NavbarLogin from './components/navbar/navbar';
import About from './components/about/about'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarLogin/>
          <Route exact path ="/"component = {Home} />
          <Route exact path = "/about" component = {About}/>
        </div>
      </Router>
    )
  }
}

export default App;