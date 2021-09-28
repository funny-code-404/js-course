import { useHistory } from 'react-router-dom';

import { users } from "../Config/config.js";
import "./style.css";

const ContactInfo = () => {

	const history = useHistory();

	const handleClick = (e) => {
		if (e.target.tagName === 'LI') {
			history.push(`/contacts/friends/${e.target.dataset.number}/${e.target.dataset.name}`);
		}
	};

	return (
		<div className="contacts-wrapper">
			<ul onClick={handleClick}>
				Contacts:
				{users.map((user) => (
					<li id={user.id} data-number={user.number} data-name={user.friendName} key={user.id}>
						{user.name}
					</li>
				))}
			</ul></div>
	);
};

export default ContactInfo;