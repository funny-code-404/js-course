import styles from "./styles.css";
import axios from "axios";

const NavigationItems = (props) => {
  async function changeDog(dog) {
    const result = await axios(
      `https://dog.ceo/api/breed/${dog}/images/random`
    );
    props.updateData(result.data.message);
    alert(`New dog is here!`);
  }
  const handleClick = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case `akita`:
        changeDog(`akita`);
        break;
      case `chow`:
        changeDog(`chow`);
        break;
      case `boxer`:
        changeDog(`boxer`);
        break;
      case `husky`:
        changeDog(`husky`);
        break;
      case `mix`:
        changeDog(`mix`);
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
