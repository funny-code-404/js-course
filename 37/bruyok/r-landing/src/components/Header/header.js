import { Component } from "react";

import "./header.css";
import logo from "../../images/projeco-logo.png";
import Navigation from "./Navigation/navigation";

class Header extends Component {
  render() {
    return (
      <header>
        <div id="home" className="header__content">
          <div className="container">
            <div className="header__content-inner">
              <div className="logo">
                <img className="logo__img-white" src={logo} alt="logo" />
              </div>
              <div className="header__text">
                <h1 className="header__title">PARTNER WITH KONSTUCT</h1>
                <p className="header__description">
                  An award-winning construction management firm
                </p>
              </div>
              <div className="header__scpoll-down">skroll down</div>
            </div>
          </div>
        </div>

        <Navigation />
      </header>
    );
  }
}

export default Header;
