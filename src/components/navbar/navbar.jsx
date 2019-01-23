import React, { Component } from 'react';
import { Navbar, NavItem, Modal, Button, Input} from 'react-materialize';
import './navbar.css'




export default class NavbarLogin extends Component {
	render() {
		return (
			<Navbar className="blue-grey darken-1" brand ="ShinDig" right>
			<NavItem>
					<Modal header="Create Account" trigger={<Button className="grey">Getting Started</Button>}>
						<Input type="email" label="Email" s={12} />
						<Input type="password" label="password" s={12} />
					</Modal>
			</NavItem>
				<NavItem href="./about">About Us</NavItem>
			</Navbar>
		);
	}
}
