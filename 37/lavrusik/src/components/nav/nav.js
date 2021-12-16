import imgLogo from '../../image/projeco-logo-black.svg';
import { nav } from '../constants';
import { Component } from 'react';
export class Nav extends Component{
    render(){
    return <nav className='nav container'>
        <ul className='nav__menu'>
            <li>
        <img className='menu__logo' src={imgLogo} alt="logo"/>
        </li>
        {nav.map(item => (
            <li>
                <a href='#'>{item}</a>
                
            </li>
        ))
        }
        </ul>
    </nav>
    }
}