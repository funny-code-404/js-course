import { Component } from 'react';

import './styles.css';

class Header extends Component {
  render() {
    return (
    <header>
    <section className="navbar-fixed navbar-fixed--background-color">
            <div  className="container">
                <div className="navbar-fixed__container">
                    <div className=" navbar-fixed__navbar-logo navbar__logo">
                        <span className="navbar__logo--leterrs-disign">KONSTRUCT</span>
                    </div>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" forhtml="menu__toggle">
                          <span></span>
                        </label>
                        <div>
                            <ul className="menu__box">
                                <li className="menu__item"><a href="#home">Feautures</a></li>
                                <li className="menu__item"> <a href="#about">About</a></li>
                                <li className="menu__item"><a href="#services">Pricing</a></li>
                                <li className="menu__item"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
        </section> 
        <section className="header" id="home">
            <div className="container">
                <div className="header__projeco-logo">
                    <span>KONSTRUCT</span>
                </div>
                <div className="header__designation">
                    <h1 className="header__title">PARTNER WITH KONSTRUCT</h1>
                    <p className="header__meaning"> An award-winning construction management firm</p>
                </div>
                <div className="header__scroll">
                    <p>SCROLL DOWN</p>
                </div>
            </div>
        </section>

        <section className="navbar navbar--background-color">
            <div  className="container">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <span className="navbar__logo--leterrs-disign">KONSTRUCT</span>
                    </div>
                    <div className="navbar__navigation">
                        <ul className="navbar__list">
                            <li className="navbar__item navbar__item--font-style"><a className="navbar__link" href="#home">HOME</a></li>
                            <li className="navbar__item navbar__item--font-style"><a className="navbar__link" href="#about">ABOUT</a></li>
                            <li className="navbar__item navbar__item--font-style"><a className="navbar__link" href="#services">SERVICES</a></li>
                            <li className="navbar__item navbar__item--font-style"><a className="navbar__link" href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="navbar__line"/>
        </section>   
    </header>
    )
} 
}

export default Header;
