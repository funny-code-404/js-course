import { Link } from 'react-router-dom';
import { contacts } from '../constant/NamePhoneData';
import GoBackBtn from '../BtnGoBack';

const PhonePage = () => {
  return (
    <>
      <h1>PhoneNumbers</h1>
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            <Link to={`/phones/${item.id}`}>{item.phoneNumber}</Link>
          </li>
        ))}
      </ul>
      <GoBackBtn />
    </>
  );
};

export default PhonePage;
