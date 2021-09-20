import { Link, useLocation, useHistory } from 'react-router-dom';

const PhoneCard = () => {
    const location = useLocation();
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }

    return (
        <div>
            <h3>{location.contact.contact.phone}</h3>
            <h3>Friends:</h3>
            <div className="column">{location.friends.map((friend) =>
                <Link key={friend.id}>{friend.name}</Link>
                )}</div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
    }
    
    export default PhoneCard;