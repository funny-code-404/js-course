import logoBlack from "../../image/projeco-logo-black.png";

const Navbar = () =>{
    return (
        <section>
            <nav>
                <ul className="menu">
                    <li className="logo"><img src={logoBlack} alt="logo_black"/></li>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>WORK</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar