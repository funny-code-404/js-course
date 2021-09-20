/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withFeedBack = (Component) => (props) => (
  <Component {...props}>
    <legend>Удаление аккаунта</legend>
    <textarea placeholder="Оставьте ваш отзыв" />
    <label htmlFor="1">
      1
      <input type="checkbox" name="" id="1" />
    </label>
    <label htmlFor="2">
      2
      <input type="checkbox" name="" id="2" />
    </label>
    <label htmlFor="3">
      3
      <input type="checkbox" name="" id="3" />
    </label>
    <label htmlFor="4">
      4
      <input type="checkbox" name="" id="4" />
    </label>
    <label htmlFor="5">
      5
      <input type="checkbox" name="" id="5" />
    </label>
    <button type="submit">Войти</button>
  </Component>
);

export default withFeedBack;
