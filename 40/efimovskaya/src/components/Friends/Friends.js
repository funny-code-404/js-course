import { useHistory, useParams } from "react-router";
import { names } from "../Contacts/Contacts";

const Friends = () => {
  const { id } = useParams();

  const history = useHistory();

  let numEl = parseInt(id.match(/\d+/)) - 1;
  console.log(numEl);

  const handleClick = () => {
    history.goBack("/contacts");
  };

  const handleClickToCalls = () => {
    history.push(`/contacts/${id}/:calls`);
  };

  return (
    <div>
      <div>
        <div onClick={handleClickToCalls}>
         <h3> Номер телефона пользователя {names[numEl].name}: {names[numEl].number}</h3>
        </div>
         Список друзей пользователя {names[numEl].name}:
        {names[numEl].friends.join(",")}
      </div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default Friends;
