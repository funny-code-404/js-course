
import { Component } from 'react';
import { navigationLinks } from './navbar.config';


class Navbar extends Component {
    
    render () {
        const li = navigationLinks.map(link => 
                <li key={link.id} className="navigation__list-item">
                    <a className="navigation__list-link" href={link.href}>{link.name}</a>
                </li>
            );

        return (
            <nav className="navigation__bar">
                <ul className="navigation__list">
                    {li}
                </ul>
            </nav>
        )
    }
}

export default Navbar;