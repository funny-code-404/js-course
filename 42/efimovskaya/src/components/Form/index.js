import { useContext, useState } from 'react';

import { Context, ACTION_CREATE_TODO, ACTION_DELETE_TODO } from '../../ducks/FirstReducer';

const Form = () => {
const { state, dispatch } = useContext(Context);

const [value, setValue] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(ACTION_CREATE_TODO({
    id: Math.ceil(Math.random() * 1000),
    name: value,
  }));

  setValue('');
 
}

const handleClickAdd = (e) => setValue(e.target.value);
const handleClickDelete = (e) => dispatch(ACTION_DELETE_TODO(+e.target.id));

    return (
     
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleClickAdd} />
        <button>+</button>
       
      <ul>
        {state.data.map((item) => (
          <li key={item.id} >
            {item.name}:{' '}
            <button id={item.id} onClick={handleClickDelete}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
      </form>
  
    )
        }

export default Form;

