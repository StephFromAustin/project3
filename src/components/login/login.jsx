import React, { Component } from 'react';
import { Jumbotron, Image, Row, Col, Grid } from 'react-bootstrap';
import {Button, CardImg, Modal, ModalBody, ModalFooter, ModalHeader,Card } from 'reactstrap'

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			nestedModal: false,
			closeAll: false
		};

		this.toggle = this.toggle.bind(this);
		this.toggleNested = this.toggleNested.bind(this);
		this.toggleAll = this.toggleAll.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleNested() {
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: false
		});
	}

	toggleAll() {
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: true
		});
	}

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

								<div>
									<Button color="primary" onClick={this.toggle}>CREATE
										{this.props.buttonLabel}
									</Button>
									<Modal
										isOpen={this.state.modal}
										toggle={this.toggle}
										className={this.props.className}
									>
										<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
										<ModalBody>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
											<br />
											<Button color="success" onClick={this.toggleNested}>
												Show Nested Modal
											</Button>
											<Modal
												isOpen={this.state.nestedModal}
												toggle={this.toggleNested}
												onClosed={this.state.closeAll ? this.toggle : undefined}
											>
												<ModalHeader>Nested Modal title</ModalHeader>
												<ModalBody>Stuff and things</ModalBody>
												<ModalFooter>
													<Button color="primary" onClick={this.toggleNested}>
														Done
													</Button>{' '}
													<Button color="secondary" onClick={this.toggleAll}>
														All Done
													</Button>
												</ModalFooter>
											</Modal>
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={this.toggle}>
												Do Something
											</Button>{' '}
											<Button color="secondary" onClick={this.toggle}>
												Cancel
											</Button>
										</ModalFooter>
									</Modal>
								</div>
							</Card>
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}
