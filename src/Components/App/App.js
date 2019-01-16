import React, { Component } from 'react';

import Header from "../Header/header";
import Main from "../Main/main";
import Footer from "../Footer/footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Our Page!, {this.props.name}</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;