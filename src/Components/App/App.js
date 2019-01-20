import React, { Component } from 'react';

import Header from "../Header/header";
import Main from "../Main/main";
import Footer from "../Footer/footer";

class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <h1>this is when the user is not logged in</h1>
        break;
      case "login":
        mainComponent = <h1>Now user is loged in and can see extra features, hi {this.props.name}</h1>
        break;
      default:
        mainComponent = <h1>User is not logged in</h1>;
      }

    return (
      <div className="container">
        {mainComponent}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;