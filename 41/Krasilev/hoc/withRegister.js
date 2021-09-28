/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withRegister = (Component) => (props) => (
  <Component {...props}>
    <legend>Регистрация</legend>
    <input type="checkbox" checked />
    <input type="text" placeholder="Фамилия" />
    <input type="date" placeholder="Год Рождения" />
    <input type="text" placeholder="Номер телефона" />
    <button type="submit">Зарегистрироваться</button>
  </Component>
);

export default withRegister;
