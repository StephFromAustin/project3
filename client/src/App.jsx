import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import ModalLogin  from './components/modal/modal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path = "/" component = {Home}/>
          <Route exact path ="./modal" component ={ModalLogin }/>
        </div>
      </Router>
    );
  }
}

export default App;