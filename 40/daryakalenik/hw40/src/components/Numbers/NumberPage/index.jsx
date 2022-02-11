import contacts from "../../../constants";
import friendFinder from "../../../helpers/friendFinder";
import { Link, useNavigate, useParams } from "react-router-dom";

function NumberPage() {
  const number = useParams().number;
  const navigate = useNavigate();
  return contacts.map((item) => {
    return item.phoneNumber === number ? (
      <div>
        <p>{item.name}</p>
        <Link
          to={{ pathname: `/numbers/${item.phoneNumber}/calls` }}
          key={item.id}
          id={item.id}
          className="name-list-item"
        >
          {item.phoneNumber}
        </Link>
        <p>
          Friend's phone numbers:
          {friendFinder(item.friends).map((element) => (
            <Link
              to={{ pathname: `/numbers/${element.phoneNumber}` }}
              key={element.id}
              className="link-item"
            >
              {element.phoneNumber}
            </Link>
          ))}
        </p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    ) : null;
  });
}
export default NumberPage;
