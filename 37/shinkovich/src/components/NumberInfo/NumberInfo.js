import { useHistory } from 'react-router-dom';

import { users } from "../Config/config.js";

import "./style.css"



const NumberInfo = () => {
	const history = useHistory();

	const handleClick = (e) => {
		if (e.target.tagName === 'LI') {
			history.push(`/contacts/${e.target.dataset.name}/${e.target.dataset.number}`);
		}
	};

	return (
		<div className="contacts-wrapper">
			<ul onClick={handleClick}>
				NumberInfo:
				{users.map((user) => (
					<li id={user.id} data-name={user.name} data-number={user.friendNumber} key={user.id}>
						{user.number}
					</li>
				))}
			</ul></div>
	);
};
export default NumberInfo;
