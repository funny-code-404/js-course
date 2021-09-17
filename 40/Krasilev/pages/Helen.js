import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Helen = () => {
  const history = useHistory();
  const goBackHandler = () => history.goBack();
  return (
    <>
      <ul>
        <h2>Номер телефона</h2>
        <Link to="lastphonecalls">555-555-555</Link>
        <ul>
          <h2>Список друзей</h2>
          <li>
            <Link to="/ann">Ann</Link>
          </li>
          <li>
            <Link to="/pit">Pit</Link>
          </li>
        </ul>
      </ul>
      <button onClick={goBackHandler} type="button">Назад</button>
    </>
  );
};

export default Helen;
