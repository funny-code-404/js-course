import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Pit = () => {
  const history = useHistory();
  const goBackHandler = () => history.goBack();
  return (
    <>
      <ul>
        <h2>Номер телефона</h2>
        <Link to="lastphonecalls">333-333-333</Link>
        <ul>
          <h2>Список друзей</h2>
          <li>
            <Link to="/helen">Helen</Link>
          </li>
          <li>
            <Link to="/ann">Ann</Link>
          </li>
        </ul>
      </ul>
      <button onClick={goBackHandler} type="button">Назад</button>
    </>
  );
};

export default Pit;
