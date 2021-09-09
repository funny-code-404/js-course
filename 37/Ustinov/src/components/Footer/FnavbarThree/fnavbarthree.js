
import { Component } from 'react';
import { footerLinksThree } from './fnavbarthree.config';


class FnavbarThree extends Component {
    
    render () {
        const li = footerLinksThree.map(link => 
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

export default FnavbarThree;