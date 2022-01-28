import { useLocation } from 'react-router-dom';
import { contacts } from '../ContactsArr';

const AboutNewContact = ({ history }) => {
  console.log(history);
  const location = useLocation();
  const { dataName, dataNumber, dataFriends } = location.state; //dataFriends = [2,10]

  const objWithFriends = {};
  dataFriends.forEach((item) => (objWithFriends[item] = ''));

  contacts.forEach((item) => {
    if (item.id in objWithFriends) {
      objWithFriends[item.id] = item.name;
    }
  });
  // console.log(objWithFriends);
  const arrWithFriends = Object.values(objWithFriends);
  // console.log(arrWithFriends);

  const handleClick = (e) => {
    // console.log(history, e.target);
  };

  const makeListOfFtiends = (arr) => {
    return arr.map((item) => {
      return (
        <li onClick={handleClick} id="item.id" key={item}>
          {item}
        </li>
      );
    });
  };

  const goBackClick = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>{dataName}</h2>
      <p>{dataNumber}</p>
      <ul>{makeListOfFtiends(arrWithFriends)}</ul>

      <button onClick={goBackClick}>Назад</button>
    </div>
  );
};
export default AboutNewContact;
