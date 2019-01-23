import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Image, Row } from 'react-bootstrap';
import './about.css';

export default class About extends Component {
	render() {
		return (
			<header>
				<Jumbotron className="logo">
					<Image src="assets/img/logo.png" width="100%" />
				</Jumbotron>
				<Grid>
					<h1 class="center">Team ShinDig</h1>
					<Row className="show-grid">
						<Col xs={6} md={4}>
							<Image src="assets/img/jav.jpg" height="200" width="200" />
						</Col>
						<Col xs={6} md={4}>
							<Image src="assets/img/mike.jpg" height="200" width="200" />
						</Col>
						<Col xsHidden md={4}>
							<Image src="assets/img/amanda.jpg" height="200" width="200" />
						</Col>
					</Row>

					<Row className="show-grid">
						<Col md={6} mdPush={6}>
							<Image src="assets/img/kang.jpg" height="200" width="200" />
						</Col>
						<Col md={6} mdPull={4}>
							<Image src="assets/img/steph.jpg" height="200" width="200" />
						</Col>
					</Row>
				</Grid>;
			</header>
		);
	}
}
