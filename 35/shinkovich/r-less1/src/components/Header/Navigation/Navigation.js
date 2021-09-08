import { Component } from 'react';
import { navLinks } from './config';
import './navigation.css';

class Navigation extends Component {

	render() {
		const li = navLinks.map(link =>
			<li className="navigation-link-item" key={link.id}>
				<a className="navigation-link-item" href={link.href}>{link.name}</a>
			</li>
		);

		return (
			<nav className="navigation">
				<ul className="navigation-links">
					{li}
				</ul>
			</nav>
		)
	}
}

export default Navigation;
