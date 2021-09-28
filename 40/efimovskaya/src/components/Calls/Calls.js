import { useHistory, useParams } from "react-router";

import { names } from "../Contacts/Contacts";

const Calls = () => {
  const { id } = useParams();

  let numEl = parseInt(id.match(/\d+/)) - 1;
  console.log(numEl);

  const history = useHistory();

  const handleclick = () => {
    history.goBack("/contacts");
  };

  return (
    <div>
      <div>
        <h3>Последние 5 звонков {names[numEl].name}:</h3>
        {names[numEl].calls.join(",")}
      </div>
      <button onClick={handleclick}>Go Back</button>
    </div>
  );
};

export default Calls;
