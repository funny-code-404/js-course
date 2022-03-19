import { useParams, Link } from 'react-router-dom';
import { contacts } from '../constant/NamePhoneData';
import GoBackBtn from '../BtnGoBack';

const PhonesDetails = () => {
  const { id } = useParams();
  const singleContact = contacts.find((item) => item.id == id);

  const friends = singleContact.friends;
  const friendsArray = [];

  friends.forEach((e) => {
    const friend = contacts.find((item) => item.id === e);
    friendsArray.push(friend);
  });

  return (
    <>
      <h2>
        {singleContact.name}
        {singleContact.surName}
      </h2>
      {friendsArray.map((item) => (
        <li key={item.id}>
          <Link to={`/phones/${item.id}`}>{item.phoneNumber}</Link>
        </li>
      ))}
      <GoBackBtn />
    </>
  );
};

export default PhonesDetails;
