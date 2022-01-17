import { Link } from "react-router-dom";

export function User(arr) {
  return arr.map(({ id, name, phoneNumber, friends }) => {
    return (
      <div className="bottom_user" key={id}>
        <Link
          to={{
            pathname: "/contact/phoneNumber",
            state: {
              name,
              phoneNumber,
              friends,
            },
          }}
          className="bottom_item"
        >
          {name}
        </Link>
        <Link
          to={{
            pathname: "/contact/name",
            state: {
              name,
              phoneNumber,
              friends,
            },
          }}
          className="bottom_item"
        >
          {phoneNumber}
        </Link>
      </div>
    );
  });
}
