import logo from "../../image/projeco-logo.png"
import Navbar from "../Navbar";


const Header = () => {
    return (
        <header>
        <section className="header">
            <article className="header__top">
                <img src={logo} alt="logo"/>
            </article>
            <article className="header__middle">
                <h1>PARTNER WITH KONSTRUCT</h1>
                <p>An award-winning construction management firm</p>
            </article>
            <article className="header__bottom">SCROLL DOWN</article>
        </section>
        <Navbar />
    </header>
    )
};

export default Header