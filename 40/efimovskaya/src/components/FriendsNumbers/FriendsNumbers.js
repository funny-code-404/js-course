import { useHistory, useParams } from "react-router";
import { names } from "../Contacts/Contacts";

const FriendsNumbers = () => {
  const { id } = useParams();
  console.log(id);

  const history = useHistory();
  let numEl = parseInt(id.match(/\d+/)) - 1;
  console.log(numEl);

  const handleClick = () => {
    history.push("/contacts");
  };

  return (
    <div>
      <div>
        <div>
          <h3>Имя пользователя:{names[numEl].name}</h3>{" "}
        </div>
        <div>
          Список телефонов друзей пользователя: {names[numEl].numbers.join(",")}
        </div>
      </div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default FriendsNumbers;
