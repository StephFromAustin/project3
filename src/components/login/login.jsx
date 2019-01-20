import React, { Component } from 'react';
import { Jumbotron, Image, Row, Col, Grid } from 'react-bootstrap';
import { Card, Button, CardImg} from 'reactstrap';
import './login.css';

export default class User extends Component {
	render() {
		return (
			<header>
				<Jumbotron>
					<Image src="assets/img/logo2.jpg" width="100%" />
				</Jumbotron>
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={4}>
							<Card body className="text-center"> 
                            <CardImg width="100%" src="assets/img/letter.png" alt="Card image cap" />
								<Button class="text-center">Create</Button>
							</Card>
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}