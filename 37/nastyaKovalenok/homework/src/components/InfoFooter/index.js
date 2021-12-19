import footerLogo from "../../image/projeco-logo.png"
import objectPng from "../../image/Object.png"
import objectPng1 from "../../image/Object(1).png"
import objectPng2 from "../../image/Object(2).png"

const InfoFooter = () =>{
    return (
        <section className="info">
            <article className="info__wrapper">
                <ul className="info__company">
                    <li>COMPANY</li>
                    <li><img src={footerLogo} alt="logo"/></li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat.
                    </li>
                </ul>
                <ul className="info__links one__column">
                    <li>LINKS</li>
                    <li><a href="https://google.com">HOME</a></li>
                    <li><a href="https://google.com">ABOUT</a></li>
                    <li><a href="https://google.com">SERVICES</a></li>
                    <li><a href="https://google.com">PROJECTS</a></li>
                    <li><a href="https://google.com">CONTACT US</a></li>
                </ul>
                <ul className="info__links second__column">
                    <li><a href="https://google.com">FAQ</a></li>
                    <li><a href="https://google.com">TERMS</a></li>
                    <li><a href="https://google.com">CAREERS</a></li>
                </ul>
                <ul className="info__links three__column">
                    <li><a href="https://google.com">BLOG</a></li>
                    <li><a href="https://google.com">PARTNERS</a></li>
                    <li><a href="https://google.com">NEWS</a></li>
                </ul>
                <ul className="info__contactUS">
                    <li>CONTACT US</li>
                    <li>213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name</li>
                    <li>+23 994 233 4022</li>
                    <li>info@konstruct.com</li>
                </ul>
                <article className="socials">
                    <img src={objectPng} alt=""/>
                    <img src={objectPng1} alt=""/>
                    <img src={objectPng2} alt=""/>
                </article>
            </article>
        </section>
    )
}

export default InfoFooter