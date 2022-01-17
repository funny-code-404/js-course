import logo from "../../image/projeco-logo.png"
import Navbar from "../Navbar";
import {SCROLL_DOWN, HEADER_H1_TEXT, HEADER_P_TEXT} from "../../constants";

const Header = () =>
     (
        <header>
        <section className="header">
            <article className="header__top">
                <img src={logo} alt="logo"/>
            </article>
            <article className="header__middle">
                <h1>{HEADER_H1_TEXT}</h1>
                <p>{HEADER_P_TEXT}</p>
            </article>
            <article className="header__bottom">{SCROLL_DOWN}</article>
        </section>
        <Navbar />
    </header>
    );

export default Header