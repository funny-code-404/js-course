import { Link } from 'react-router-dom';


const Navigation = () => {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/login'> withLogin</Link>
			<Link to='/registration'>Registration</Link>
			<Link to='/feedback'>Feedback</Link>
		</nav>
	);
};

export default Navigation;
