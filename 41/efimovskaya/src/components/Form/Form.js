import React from "react";
import styles from "../Form/styles.scss";

// <p>{React.Children.count(this.props.children)}</p>
const Form = ({ children }) => (
  <>
    <form>
      <input name="name" placeholder="Имя"></input>
      <input type="email" placeholder="Емайл"></input>
      <input type="password" placeholder="Пароль"></input>
    </form>
    {children}
  </>
);

export default Form;
