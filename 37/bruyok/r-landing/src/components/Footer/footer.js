import { Component } from "react";

import "./footer.css";
import logo from "../../images/projeco-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="container">
            <div className="footer__content">
              <div className="footer__company">
                <h4 className="footer__title">COMPANY</h4>
                <div className="logo footer__logo">
                  <a href="#" class="logo__link">
                    <img className="logo__img-white" src={logo} alt="logo" />
                  </a>
                </div>
                <p className="subtitle footer__subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat.
                </p>
              </div>

              <div className="footer__contact-us">
                <div className=" footer__adress subtitle footer__subtitle">
                  <h4 className="footer__title">CONTACT US</h4>
                  213 Baker Street <br />
                  Oriel City Kounty <br />
                  7000 KNW, <br />
                  Kountry Name <br />
                  <br />
                  <a
                    className="footer__link footer__link-tel"
                    href="tel:+23 994 233 4022"
                  >
                    +23 994 233 4022
                  </a>
                  <a className="footer__link" href="mailto:info@konstruct.com">
                    info@konstruct.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__subtitle subtitle">
            © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
