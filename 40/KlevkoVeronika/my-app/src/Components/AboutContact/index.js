import { useLocation } from 'react-router-dom';
import { contacts } from '../ContactsArr';
import { Link } from 'react-router-dom';

const AboutContact = ({ history }) => {
  // console.log(history);
  const location = useLocation();
  const { dataName, dataNumber, arrFriends } = location.state;

  const objWithFriends = {};
  arrFriends.forEach((item) => (objWithFriends[item] = ''));

  contacts.forEach((item) => {
    if (item.id in objWithFriends) {
      objWithFriends[item.id] = item;
    }
  });
  console.log(objWithFriends);
  const arrWithFriends = Object.values(objWithFriends);
  console.log(arrWithFriends);

  const makeListOfFtiends = (arr) => {
    return arr.map((item) => {
      return (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/about/${item.id}}`,
              state: {
                dataName: item.name,
                dataNumber: item.phoneNumber,
                arrFriends: item.friends,
              },
            }}
          >
            {' '}
            {item.name}{' '}
          </Link>
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
      <p>Номер телефона: {dataNumber}</p>
      <p>Друзья:</p>
      <ul> {makeListOfFtiends(arrWithFriends)}</ul>

      <button onClick={goBackClick}>Назад</button>
    </div>
  );
};
export default AboutContact;
