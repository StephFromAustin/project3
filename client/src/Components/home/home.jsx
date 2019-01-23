import React, { Component } from 'react';
import {Parallax, CardTitle, Card, Footer, Row} from 'react-materialize';


export default class Home extends Component {
	render() {
		return (
			<header>
				<Parallax imageSrc="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"  responsive />
				<div className="section white">
					<div className="row container">
						<h2 className="header">Our Mission</h2>
						<p className="grey-text text-darken-3 lighten-3">
							ShinDig is to empower individuals to create, plan, and execute any event type, at any size. ShinDig will become the only applicaiton needed for both host and guest to assign tasks, save event infomraiton, and invite friends and family.
						</p>
					</div>
				</div>
				<Row className = "container">
						<Card
							className="col s12 m4"
							header={<CardTitle image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80">Guests List, Invites & Registry </CardTitle>}
							actions={[ <a href="/what">Create</a> ]}>
							
						</Card>{' '}
						<Card
							className="col s12 m4"
							header={<CardTitle image= "https://images.unsplash.com/photo-1541701711-f5b5c81a6780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">RSVP's, Registry Fuffillment</CardTitle>}
							actions={[ <a href="/what">Party</a> ]}>
							
						</Card>
						<Card
							className="col s12 m4"
							header={<CardTitle image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80">I need ... </CardTitle>}
							actions={[ <a href="/what">Search</a> ]}>
							
						</Card>
				</Row>

				<Parallax imageSrc="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" responsive/>
				<Footer
					className="blue-grey darken-1"
					copyrights="Shindig 2019 Copyright Text"
					links={
						<ul>
							<li>
								<a className="grey-text text-lighten-3" href="#!">
									Link 1
								</a>
							</li>
						</ul>
					}
				
				/>
			</header>
		);
	}
}
