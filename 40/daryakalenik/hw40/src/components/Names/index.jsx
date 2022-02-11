import contacts from "../../constants";
import { Link } from "react-router-dom";

function Names() {
  return contacts.map((item) => {
    return (
      <Link
        to={`${item.name}/${item.surName}`}
        key={item.id}
        className="name-list-item"
      >
        {item.name}
      </Link>
    );
  });
}
export default Names;
