import { useHistory } from 'react-router-dom';
import {calls} from './config';

function CallsList () {
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return (
        <div>
            <ul>
                {calls.map((call) =>
                    <li>{call}</li>
                )}
            </ul>
            <button onClick={handleClick}>Back</button>
        </div>
    );
    }
    
    export default CallsList;