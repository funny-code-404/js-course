import { Link } from 'react-router-dom';

import './style.css';

const Navigation = () => {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/contacts/:name'>Contact Info</Link>
			<Link to='/numbers/:number'>Number Info</Link>
			<Link to='/contacts/:name/:friendNumber'>Friend Card</Link>
			<Link to='/contacts/friends/:number/:friendName'>Number Card</Link>
		</nav>
	);
};

export default Navigation;
