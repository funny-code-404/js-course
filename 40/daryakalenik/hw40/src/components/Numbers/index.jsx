import contacts from "../../constants";
import { Link } from "react-router-dom";

function Numbers() {
  return contacts.map((item) => {
    return (
      <Link to={item.phoneNumber} key={item.id} className="number-list-item">
        {item.phoneNumber}
      </Link>
    );
  });
}
export default Numbers;
