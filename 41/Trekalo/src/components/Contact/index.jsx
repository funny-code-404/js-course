import React, { useMemo } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { friendsInfoMaker } from "../utils/friendsInfoMaker";

export function Contact(props) {
  const history = useHistory();

  const clickHandler = () => {
    history.goBack();
  };

  const { contactInfo } = useParams();
  console.log(props);
  const userFriendsInfo = contactInfo === "name" ? "phoneNumber" : "name";
  const { state } = useLocation();

  const { friends } = state;
  const friendsInfoMap = useMemo(() => friendsInfoMaker(friends), [friends]);

  return (
    <div>
      <p>{contactInfo === "name" ? state["name"] : state["phoneNumber"]}</p>
      <p>Телефоны или имена друзей:</p>
      {friendsInfoMap.map(({ id, friends }, index, arr) => (
        <Link
          key={id}
          className="bottom_item"
          to={{
            pathname: `/contact/${contactInfo}`,
            state: {
              [contactInfo]: arr[index][contactInfo],
              friends: friends,
            },
          }}
        >
          {arr[index][userFriendsInfo]}
        </Link>
      ))}
      <button onClick={clickHandler}>Go back</button>
    </div>
  );
}
