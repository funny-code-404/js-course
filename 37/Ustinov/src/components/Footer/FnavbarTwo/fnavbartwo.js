
import { Component } from 'react';
import { footerLinksTwo } from './fnavbartwo.config';


class FnavbarTwo extends Component {
    
    render () {
        const li = footerLinksTwo.map(link => 
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

export default FnavbarTwo;