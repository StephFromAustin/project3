import React, { Component } from 'react';
import { Navbar, NavItem, Modal, Button, Input,Row} from 'react-materialize';
import './navbar.css'




export default class NavbarLogin extends Component {
	render() {
		return (
			<Navbar className="blue-grey darken-1" brand ="ShinDig" right>
			<NavItem>
					<Modal header="Create Account" trigger={<Button className="grey">Getting Started</Button>}>
						<Input type="email" label="Email" s={12} />
						<Input type="password" label="password" s={12} />
						<Row>
						<NavItem  href ="./login">
							<Button>Login</Button> 
						</NavItem>
						<NavItem> 
							<Modal header="Create Account" trigger={
								<Button>Sign-Up</Button>}>
							<Row>
    							<Input placeholder="First Name" s={6} label="First Name" />
    							<Input s={6} label="Last Name" />
    							<Input type="password" label="password" s={12} />
    							<Input type="email" label="Email" s={12} />
								<Button>Sign-Up</Button>
							</Row>
							</Modal>
						</NavItem>
						</Row>
						
						
						

					</Modal>
			</NavItem>
				<NavItem href="./about">About Us</NavItem>
			</Navbar>
		);
	}
}
