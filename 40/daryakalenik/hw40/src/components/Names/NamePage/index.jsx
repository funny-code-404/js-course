import contacts from "../../../constants";
import { useParams } from "react-router-dom";
import friendFinder from "../../../helpers/friendFinder";
import { Link, useNavigate } from "react-router-dom";

function NamePage() {
  const fullName = useParams();
  const navigate = useNavigate();
  return contacts.map((item) => {
    return item.name === fullName.name && item.surName === fullName.surname ? (
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
          List of friends:
          {friendFinder(item.friends).map((element) => (
            <Link
              to={{ pathname: `/names/${element.name}/${element.surName}` }}
              key={element.id}
              className="link-item"
            >
              {element.name}
            </Link>
          ))}
        </p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    ) : null;
  });
}
export default NamePage;
