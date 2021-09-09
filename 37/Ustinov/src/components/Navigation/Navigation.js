import { Component } from 'react';
import './navigation.css';

import Navbar from './navbar';


class Navigation extends Component {
    
    render () {
       return (
          <section className="navigation">
            <div className="navigation__container container">
              <div className="navigation__logo">
                <p className="logo-black">KONSTRU<span className="logo-blue">◄</span>T</p>
              </div>
                <Navbar />
            </div>
          </section>
        );
    }
}

export default Navigation;