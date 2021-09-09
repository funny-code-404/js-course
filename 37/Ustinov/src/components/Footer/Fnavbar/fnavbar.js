
import { Component } from 'react';
import { footerLinks } from './fnavbar.config';


class Fnavbar extends Component {
    
    render () {
        const li = footerLinks.map(link => 
                <li key={link.id} className="links-item">
                    <a className="links-item__link" href={link.href}>{link.name}</a>
                </li>
            );

        return (
            <nav className="links-menu">
                <ul className="links-menu__list">
                    {li}
                </ul>
            </nav>
        )
    }
}

export default Fnavbar;