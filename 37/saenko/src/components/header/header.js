import { Component } from 'react';
import './header.css';
import Navbar from './navbar/navbar';
import Logo from './logo/logo';

class Header extends Component {
    
    render () {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header__content">
                        <Logo />
                        <Navbar/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;