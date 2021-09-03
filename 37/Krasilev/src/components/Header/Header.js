import React from 'react'
import './Header.css'
import Logo from './Logo';

const Header = (props) => (
 (
   <header className="header">
     <div className="container">
       <div className="header__top flex-jc-sb-center">
         <Logo />
         <div className="header__box">
           <h1 className="header__title">PARTNER WITH KONSTUCT</h1>
           <p className="header__subtitle">An&nbsp;award-winning construction management firm</p>
         </div>
         <a className="header__link" href="#about">SCROLL DOWN</a>
       </div>
     </div>
   </header>
 )
  );

export default Header;
