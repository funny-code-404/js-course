import { contacts } from "../ContactsArr/index";
import { Link } from "react-router-dom";

const Numbers = () => {
  return (
    <div>
      {contacts.map((item) => (
        <li key={item.id}>
          <Link
            key={item.id}
            to={{
              pathname: `/numbers/about/${item.id}`,
              state: {
                dataName: item.name,
                dataNumber: item.phoneNumber,
                arrFriends: item.friends,
              },
            }}
          >
            {" "}
            {item.phoneNumber}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default Numbers;
