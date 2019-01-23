import React, { Component } from 'react';
import { Jumbotron,Image} from 'react-bootstrap';
import './what.css'

export default class What extends Component {
    render() {
        return (
            <header>
            <Jumbotron>
                <Image src = "assets/img/brand1.jpeg" width ="100%"></Image>

            </Jumbotron>
            <p> WHAT WE DO PAGE</p>
            </header>
        
            );
        }
    }