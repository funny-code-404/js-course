import { useLocation, useHistory } from 'react-router-dom';

const NameCard = () => {
    const location = useLocation();
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }

    const handlePush = () => {
        history.push("/calls");
    }
    
    return (
        <div>
            <h3>{location.contact.contact.name}</h3>
            <h3>Friends:</h3>
            <div className="column">{location.friends.map((contact) =>
                <li key={contact.id} onClick={handlePush}>{contact.phone}</li>
                )}</div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}
    
export default NameCard;