import React, { Component } from 'react';
import { Jumbotron,Image} from 'react-bootstrap';
import './login.css'

export default class User extends Component {
render() {
    return (
        <header>
        <Jumbotron>
            <Image src = "assets/img/logo2.jpg" width ="100%"></Image>
        </Jumbotron>
        </header>
    
        );
    }
}