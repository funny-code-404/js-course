import ContactsData from '../../data/contacts.json'
import classes from "../PhoneColumn/PhoneColumn.module.css";
import {Link} from "react-router-dom";

const NameColumn = () => {

    return(
        <div className={classes.phoneColumn}>
            <h2>Имена</h2>
            {ContactsData.map((item)=>(
                    <Link to={{
                        pathname: `/descriptionContact/${item.id}`,
                        state: {
                            mainVar: 'phoneNumber',
                            varForFriends: 'name'
                        }
                    }} key={item.id}>{item.name}</Link>
                ))}
        </div>
    )
}

export default NameColumn