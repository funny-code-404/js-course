/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withLogin = (Component) => (props) => (
  <Component {...props}>
    <legend>Вход</legend>

    <label htmlFor="isLogin">
      Оставлять меня в системе
      <input type="checkbox" name="" id="isLogin" checked />
    </label>

    <button type="submit">Войти</button>
  </Component>
);

export default withLogin;
