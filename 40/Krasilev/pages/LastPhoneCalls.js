import React from 'react';
import { useHistory } from 'react-router-dom';

const LastPhoneCalls = () => {
  const history = useHistory();
  const goBackHandler = () => history.goBack();
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <button onClick={goBackHandler} type="button">Назад</button>
    </ul>
  );
};

export default LastPhoneCalls;
