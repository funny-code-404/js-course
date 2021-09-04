import { Component } from 'react';
import { navLinks } from './config';
import './navbar.css';

class Navbar extends Component {
    
    render () {
        const li = navLinks.map(link => 
                <li className="menu__item">
                    <a className="menu__link" href={link.href}>{link.name}</a>
                </li>
            );

        return (
            <nav className="header__menu">
                <ul class="menu menu--row">
                    {li}
                </ul>
            </nav>
        )
    }
}

export default Navbar;