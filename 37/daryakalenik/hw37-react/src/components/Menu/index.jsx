import React, { Component } from "react";
import { menuItems } from "./constants";
import "./styles.css";

class Menu extends Component {
  render() {
    return (
      <div className="menuWrapper">
        <ul>
          <li className="menuItem">
            <a href="#">{menuItems[0]}</a>
          </li>
          <li className="menuItem">
            <a href="#">{menuItems[1]}</a>
          </li>
          <li className="menuItem">
            <a href="#">{menuItems[2]}</a>
          </li>
          <li className="menuItem lastItem">
            <a href="#">{menuItems[3]}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
