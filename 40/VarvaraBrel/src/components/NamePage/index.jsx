import { Link } from 'react-router-dom';
import GoBackBtn from '../BtnGoBack';
import { contacts } from '../constant/NamePhoneData';

const NamePage = () => {
  return (
    <>
      <h1>Names</h1>
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            <Link to={`/names/${item.id}`}>
              {item.name} {item.surName}
            </Link>
          </li>
        ))}
      </ul>
      <GoBackBtn />
    </>
  );
};

export default NamePage;
