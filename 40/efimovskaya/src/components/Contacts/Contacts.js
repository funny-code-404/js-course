import { useHistory } from 'react-router-dom';

 export const names = [
 {
   id: 1,
   name: 'Paul',
   number: '382736464857',
   numbers: ['111111111', '111111122', '1223445667', ],
   friends: ['Ann', 'Rita', 'John'],
   calls:['1156411111', '1111143352', '11245667', '2134111122', '44531111122' ]
 }, 
 {
  id: 2,
  name: 'Anita',
  number: '32874864857',
  numbers: ['11114345451', '56111122', '1265645667',],
  friends: ['Ann', 'Rita', 'John'],
  calls:['1134231111', '11115477522', '9993445667', '6661111122', '4441111122' ]
}, 
{
  id: 3,
  name: 'Pit',
  number: '746627657',
  numbers: ['1112435111', '7771111122', '122347986667',],
  friends: ['Ann', 'Rita', 'John'],
  calls:['3311111111', '441111122', '66223445667', '771111122', '8811111122' ]
}, 
]

 const Contacts = (props) => {
  const history = useHistory();


  const handleClickToNames = (e) => {
    if (e.target.tagName === 'LI') {
      history.push(`/contacts/:${e.target.id}`);
    }
  };

  const handleClickToNumbers  = (e) => {
    if (e.target.tagName === 'P') {
      history.push(`/numbers/:${e.target.id}`);
    }
  };

  console.log(props);
  console.log(names);
  return (

    <div>
      <h3>Contacts</h3>
      <div> {names.map((name) => (
        <li  id={name.id} key={name.id}  onClick={handleClickToNames}>
          {name.name}: <p id={name.id} onClick={handleClickToNumbers}>{name.number}</p>
        </li>
      ))}</div>
    </div>
  );
};

export  default Contacts;
