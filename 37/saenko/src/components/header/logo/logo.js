import { Component } from "react";
import './logo.css';
import logoIcon from '../../../icons/logo.svg';

class Logo extends Component {
    
    render () {
        return (
            <a className="logo" href="#visiting">
            <img
              src={logoIcon}
              alt="museum logo"
              className="logo__icon"
            />
            <h1 className="logo__title">louvre</h1>
          </a>
        );
    }
}

export default Logo;