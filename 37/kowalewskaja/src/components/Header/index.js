import { Component } from "react";

class Header extends Component {
  render() {
    const { menu } = this.props;
    const {titles} = this.props;
    return (
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <div className="navigation__menu">
              <div className="logo__container">
             
            <a href="./" class="menu-a"> SCANDI</a>
               
              </div>
              <ul className="menu__list">
                
                {
        menu.map((item,keyNum) =>{
          return <li key = {keyNum} className="menu-li">
             <a href="./" className="menu-a">{item}</a>
          </li>
        })}
              </ul>
            </div>
          </nav>
        </div>

        <div className="container__small">
          <div className="header__basic">
            <h1 className="basic__title">
              {titles.title}
            </h1>
            <p className="basic__subtitle">
            {titles.subtitle}
            </p>

            <button className="button">Оставить заявку</button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
