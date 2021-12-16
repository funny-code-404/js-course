import { Component } from "react";
import imgLogo from '../../image/projeco-logo.svg'
class Header extends Component{
    
    render(){
        const { HeaderText, SubtitleText, HeaderFootText } = this.props;
        return <header className="header">
            <div className='header__logo'>
                <img src={imgLogo} alt='projeco-logo'/>
            </div>
            <div className='header__logo-text'>
                <h1>{HeaderText}</h1>
                <p>{SubtitleText}</p>
            </div>
            <div className='header__text-footer'>
                <p>{HeaderFootText}</p>
            </div>
        </header>
        
    }
}
export default Header;