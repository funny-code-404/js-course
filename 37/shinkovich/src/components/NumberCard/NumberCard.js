//import { useEffect, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import "./style.css"

const FriendNumber = () => {

	const history = useHistory();

	const { number, friendName } = useParams();

	const handleClick = () => history.push('/contacts/:name');

	return (
		<div className="numcard-wrapper">

			Number: {number}<br />
			<div>Friends:<p>{friendName}</p></div>
			<button onClick={handleClick}>Назад</button>
		</div>
	);
};

export default FriendNumber;




