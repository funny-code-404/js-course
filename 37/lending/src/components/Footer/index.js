import { Component } from "react";

import logo from "../../img/logo.png";
import one from "../../img/1.png";
import two from "../../img/2.png";
import tree from "../../img/3.png";

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="action">
          <article className="action__question">
            <h4>Want to build something amazing?</h4>
          </article>
          <article className="action__touch">
            <input type="button" value="GET IN TOUCH" />
          </article>
        </section>
        <section className="signup">
          <article className="signup__text">
            <p>Newsletter Signup</p>
          </article>
          <article className="signup__email">
            <input type="email" placeholder="test@youremail.com" />
            <input type="button" value="SIGNUP" />
          </article>
        </section>
        <section className="links">
          <div className="container">
            <article className="links__company">
              <p>COMPANY</p>
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat.
              </p>
            </article>
            <article className="links__about">
              <ul>
                <li>LINKS</li>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>PROJECTS</li>
                <li>CONTACT US</li>
              </ul>
            </article>
            <article className="links__info">
              <ul>
                <li>FAQ</li>
                <li>TERMS</li>
                <li>CAREERS</li>
              </ul>
            </article>
            <article className="links__additional">
              <ul>
                <li>BLOG</li>
                <li>PARTNERS</li>
                <li>NEWS</li>
              </ul>
            </article>
            <article className="links__contact">
              <p>CONTACT US</p>
              <p>213 Baker Street</p>
              <p>Oriel City Kounty</p>
              <p>7000 KNW,</p>
              <p>Kountry Name</p>
              <p>+23 994 233 4022</p>
              <p>info@konstruct.com</p>
            </article>
            <article className="links__social">
              <img src={one} alt="facebook" />
              <img src={two} alt="twitter" />
              <img src={tree} alt="google" />
            </article>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
