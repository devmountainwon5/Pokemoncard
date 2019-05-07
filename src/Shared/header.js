import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false
		};
	}

	showNav = () => {
		this.setState({
			showNav: !this.state.showNav
		});
	};

	render() {
		const navLinks = (
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/CaughtPokemon">Pokemon</Link>
			</div>
		);
		return (
			<div className="Header">
				<header className="header">
					<div className="nav-item">
						{this.state.showNav ? navLinks : <i onClick={this.showNav} className="fas fa-bars" />}
					</div>

					<div className="logo" />

					<div className="nav-item">
						<i className="fas fa-user" />
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
