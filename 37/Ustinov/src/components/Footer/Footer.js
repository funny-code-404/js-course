import { Component } from 'react';
import './footer.css';
import Fnavbar from './Fnavbar/fnavbar';
import FnavbarTwo from './FnavbarTwo/fnavbartwo';
import FnavbarThree from './FnavbarThree/fnavbarthree';

class Footer extends Component {
    
    render () {
       return (
            <footer>
              <section className="footer__contact-section" id="contact">
                  <div className="footer__container container">
                    <div className="footer__company-container">
                      <h3 className="company-title">COMPANY</h3>
                    <div className="company-logo">
                      <a className="logo" href="#home">KONSTRU<span className="logo-blue">◄</span>T</a>
                    </div>
                      <p className="company-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat.</p>
                   </div>
                  <div className="footer__links-container">
                    <h3 className="links-title">LINKS</h3>
                  <div className="links-navigation">


                    <Fnavbar />

                    <FnavbarTwo />

                    <FnavbarThree />


                  </div>
                  </div>
                 <div className="footer__contact-container">
                  <h3 className="contact-title">CONTACT US</h3>
                    <p className="contact-text">213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name</p>
                    <p className="contact-text">+23 994 233 4022</p>
                    <p className="contact-text">info@konstruct.com</p>
                </div>
                </div>
              </section>
              
              <section className="footer__copyright-section">
                <p className="footer__copyright-text">
                © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
                </p>
            </section>
          </footer>
        );
    }
}

export default Footer;