import { contacts } from "./config";
import { Link } from "react-router-dom";
import "./index.css";

const ContactsList = () => {
  return (
    <ul className="contacts-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link
            to={{
              pathname: `/:${contact.name}`,
              contact: { contact },
              friends: contacts,
            }}
          >
            {contact.name}
          </Link>
          <span> </span>
          <Link
            to={{
              pathname: `/:${contact.name}/:${contact.phone}`,
              contact: { contact },
              friends: contacts,
            }}
          >
            {contact.phone}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
