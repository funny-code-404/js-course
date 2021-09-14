import { Component } from "react";

import "./navigation.css";
import logo from "../../../images/projeco-logo-black.png";

import { navigationLinks } from "./menuList.config";

class Navigation extends Component {
  render() {
    const li = navigationLinks.map((link) => (
      <li key={link.id} className="menu__list-item">
        <a className="menu__link menu__link--active" href={link.href}>
          {link.name}
        </a>
      </li>
    ));

    return (
      <div className="header__navigation--border-bottom">
        <div className="container">
          <div className="header__nav-inner">
            <div className="logo">
              <img class="logo__img-black" src={logo} alt="logo" />
            </div>
            <nav className="header__menu">
              <ul className="menu__list">{li}</ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
