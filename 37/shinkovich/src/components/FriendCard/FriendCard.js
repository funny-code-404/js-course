import { useParams } from 'react-router-dom';

import "./style.css"

const FriendCard = () => {
	const { name, friendNumber } = useParams();

	return (
		<div className="frcard-wrapper">
			Name: {name}<br />
			Friends numbers:{friendNumber}
		</div>
	);
};

export default FriendCard;
