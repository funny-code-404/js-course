
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import ContactsData from '../../data/contacts.json';

const DescriptionContact = () => {
    const history = useHistory();
    const {contactId} = useParams();
    const { state } = useLocation();
    const {mainVar, varForFriends} = state;

    const searchContactById = (arr, id) => {
        return arr.find(item => item.id === Number(id));
    }

    const goBackClick = () =>{
        history.goBack()
    }

    const contact = searchContactById(ContactsData, contactId);

    const arrFriends = [...contact.friends];

    let linkFriend = null;

    if (arrFriends.length) {
        linkFriend = arrFriends.map((id) => (
                <div>
                    <Link key={id}
                          to={{
                              pathname: `/descriptionContact/${id}`,
                              state: {
                                  mainVar: mainVar,
                                  varForFriends: varForFriends
                          }}}>
                        {searchContactById(ContactsData, id)[varForFriends]}
                    </Link>
                </div>
            )
        )
    } else linkFriend = "В записной книге нет друзей"


    return (
        <>
        <div>
            <h1>{contact[mainVar]}</h1>
            <h3>Список друзей:</h3>
            {linkFriend}
        </div>
            <button onClick={goBackClick}>Назад</button>
        </>
    )
}

export default DescriptionContact