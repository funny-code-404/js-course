import { useParams, Link } from 'react-router-dom';
import { contacts } from '../constant/NamePhoneData';
import GoBackBtn from '../BtnGoBack';

const NameDetails = () => {
  const { id } = useParams();
  const singleContact = contacts.find((item) => item.id == id);

  const friends = singleContact.friends;
  const friendsArray = [];

  friends.forEach((e) => {
    let friend = contacts.find((item) => item.id === e);
    friendsArray.push(friend);
  });

  return (
    <>
      <h2>{singleContact.phoneNumber}</h2>
      {friendsArray.map((item) => (
        <li key={item.id}>
          <Link to={`/names/${item.id}`}>
            {item.name} {item.surName}
          </Link>
        </li>
      ))}
      <GoBackBtn />
    </>
  );
};

export default NameDetails;
