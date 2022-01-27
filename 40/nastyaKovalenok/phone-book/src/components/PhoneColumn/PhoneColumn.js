import {Link} from "react-router-dom";
import ContactsData from '../../data/contacts.json'
import classes from './PhoneColumn.module.css'

const PhoneColumn = () => {

    return (
        <div className={classes.phoneColumn}>
            <h2>Номера телефонов</h2>
            {ContactsData.map(item => (
                <Link to={{
                    pathname: `/descriptionContact/${item.id}`,
                    state: {
                        mainVar: 'name',
                        varForFriends: 'phoneNumber'
                    }
                }}
                      key={item.id}>
                    {item.phoneNumber}
                </Link>
            ))}
        </div>
    )
}

export default PhoneColumn