/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';

import './styles.css'

class Footer extends Component {
  render() {
    return ( 
    <footer>
     <section className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__company footer__company--style-f">
                        <h3 className="footer__title-s">COMPANY</h3>
                        <span className="footer__logo-disign">KONSTRUT</span>
                        <p className="footer__paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                    </div>
                    <div className="footer__links-title">
                        <h4 className="footer__links--title-s" >LINKS</h4>
                    <div className="footer__links">
                        <div className="footer__list">
                            <ul className="footer__items" id="footer__item">
                                <li className="footer__item"> <a className="footer__link">HOME</a></li>
                                <li className="footer__item"><a className="footer__link">ABOUT</a></li>
                                <li className="footer__item"><a className="footer__link">SERVICES</a></li>
                                <li className="footer__item"><a className="footer__link">PROJECTS</a></li>
                                <li className="footer__item"><a className="footer__link">CONTACT US</a></li>
                            </ul>
                        </div>
                        <div className="footer__list footer__list-position">
                            <ul className="footer__items" id="footer__item2">
                                <li className="footer__item"><a className="footer__link">FAQ</a></li>
                                <li className="footer__item"><a className="footer__link">TERMS</a></li>
                                <li className="footer__item"><a className="footer__link">CAREERS</a></li>
                            </ul>
                        </div>
                        <div className="footer__list footer__list-position">
                            <ul className="footer__items" id="footer__item3">
                                <li className="footer__item"><a className="footer__link">BLOG</a></li>
                                <li className="footer__item"><a className="footer__link">PARTNERS</a></li>
                                <li className="footer__item"><a className="footer__link">NEWS</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="footer__contacts" id="contact">
                        <h4 className="footer__contacts-title">CONTACT US</h4>
                        <div className="footer__contacts-container">
                            <address className="footer__contacts-adress">213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name</address>
                            <p><a href="tel:+23 994 233 4022" className="footer__contacts-tel">+23 994 233 4022</a></p>
                            <p><a href="mailto:nfo@konstruct.com" className="footer__contacts-email">nfo@konstruct.com</a></p>
                        </div>            
                    </div>
                </div>
            </div>
        </section>

    </footer>
    )
}
  
}

export default Footer;