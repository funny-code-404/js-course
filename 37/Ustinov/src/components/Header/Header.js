import { Component } from 'react';
import './header.css';

class Header extends Component {
    
    render () {
       return (
          <header>
            <div className="header" id="home"> 
              <div className="header__container container">
                <div className="header__logo">
                  <a className="logo" href="#home">KONSTRU<span className="logo-blue">◄</span>T</a>
                </div>

                <div className="header__body">
                  <h2 className="header__titile">PARTNER WITH KONSTUCT</h2>
                  <p className="header__subtitle">An award-winning construction management firm</p>
                </div>

                <div className="header__footer">
                  <a href="#about" className="header-scroll-down">Scroll down</a>
                </div>
              </div> 
            </div>
          </header>
        );
    }
}

export default Header;