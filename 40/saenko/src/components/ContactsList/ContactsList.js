function ContactsList (props) {
return (
    <ul className="contacts-list">
        {props.contacts.map((contact) =>
            <li key={contact.id}><h3>{contact.name}</h3><p>{contact.phone}</p></li>
        )}
    </ul>
);
}

export default ContactsList;