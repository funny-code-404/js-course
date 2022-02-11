import { Link } from "react-router-dom";
import { contacts } from "../ContactsArr/index";

const Contacts = () => {
  return (
    <div>
      {contacts.map((item) => (
        <li key={item.id}>
          <Link
            key={item.id}
            to={{
              pathname: `/about/${item.id}`,
              state: {
                dataName: item.name,
                dataNumber: item.phoneNumber,
                arrFriends: item.friends,
              },
            }}
          >
            {" "}
            {item.name + "" + item.surName}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Contacts;
