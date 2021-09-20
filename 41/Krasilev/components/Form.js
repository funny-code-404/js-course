/* eslint-disable react/prop-types */
import React from 'react';

const Form = ({ children }) => (
  <form action="">
    <input type="text" placeholder="Имя" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Пароль" />
    {children}
  </form>
  );

export default Form;
