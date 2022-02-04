import styles from "./styles.css";
import axios from "axios";
import {changeDog} from "../../api/index"

const NavigationItems = (props) => {
  const handleClick = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case `akita`:
        changeDog(`akita`, props);
        break;
      case `chow`:
        changeDog(`chow`, props);
        break;
      case `boxer`:
        changeDog(`boxer`, props);
        break;
      case `husky`:
        changeDog(`husky`, props);
        break;
      case `mix`:
        changeDog(`mix`, props);
        break;
    }
  };
  const breeds = props.breeds;
  return breeds.map((item) => {
    return (
      <li
        key={item.id}
        id={item.id}
        className="dogs-item-list"
        onClick={handleClick}
      >
        {item.breed}
      </li>
    );
  });
};

export default NavigationItems;
