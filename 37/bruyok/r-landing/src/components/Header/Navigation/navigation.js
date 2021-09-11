import { Component } from "react";

import "./navigation.css";
import logo from "../../../images/projeco-logo-black.png";

class Navigation extends Component {
  render() {
    return (
      <div className="header__navigation--border-bottom">
        <div className="container">
          <div className="header__nav-inner">
            <div className="logo">
              <a href="#" class="logo__link">
                <img class="logo__img-black" src={logo} alt="logo" />
              </a>
            </div>
            <nav className="header__menu">
              <ul className="menu__list">
                <li className="header__menu-button menu__link--active">
                  <i className="fas fa-bars"></i>
                </li>
                <li className="menu__list-item">
                  {/* <a href="#" class="menu__link menu__link--active">
                    home
                  </a> */}
                </li>
                <li className="menu__list-item">
                  {/* <a href="#" class="menu__link menu__link--active">
                    about
                  </a> */}
                </li>
                <li className="menu__list-item">
                  {/* <a href="#" class="menu__link menu__link--active">
                    services
                  </a> */}
                </li>
                <li className="menu__list-item">
                  {/* <a href="#" class="menu__link menu__link--active">
                    contact
                  </a> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
