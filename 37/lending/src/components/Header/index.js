import { Component } from "react";

import "./style.css";

class Header extends Component {
  render() {
    return (
      <header>
        <section className="header">
          <article className="header_top">KONSTRUCT</article>
          <article className="header_middle">
            <h1>PARTNER WITH KONSTUCT</h1>
            <p>An award-winning coustruction management firm</p>
          </article>
          <article className="header_bottom">
            <p>SCROLL DOWN</p>
          </article>
        </section>
        <section className="border">
          <nav>
            <ul className="menu">
              <li className="menu_logo"></li>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>WORK</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;
