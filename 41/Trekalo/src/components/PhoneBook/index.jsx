import React from "react";
import { contacts } from "../../App";
import { User } from "./components/User";

export function PhoneBook(props) {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="top_item">Имена</div>
        <div className="top_item">Номера телефонов</div>
      </div>
      <div className="bottom">{User(contacts)}</div>
    </div>
  );
}
