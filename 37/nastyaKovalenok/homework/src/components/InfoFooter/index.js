import footerLogo from "../../image/projeco-logo.png"
import objectPng from "../../image/Object.png"
import objectPng1 from "../../image/Object(1).png"
import objectPng2 from "../../image/Object(2).png"
import {
    ABOUT, ADDRESS, BLOG, CAREERS, COMPANY, CONTACT_US, EMAIL, FAQ,
    GOOGLE_URL, HOME, LINKS, NEWS, PARTNERS, PHONE, PROJECTS, SERVICES, TERMS, TEXT_LOREM,
} from "../../constants";

const InfoFooter = () =>
     (
        <section className="info">
            <article className="info__wrapper">
                <ul className="info__company">
                    <li>{COMPANY}</li>
                    <li><img src={footerLogo} alt="logo"/></li>
                    <li>{TEXT_LOREM}</li>
                </ul>
                <ul className="info__links one__column">
                    <li>{LINKS}</li>
                    <li><a href={GOOGLE_URL}>{HOME}</a></li>
                    <li><a href={GOOGLE_URL}>{ABOUT}</a></li>
                    <li><a href={GOOGLE_URL}>{SERVICES}</a></li>
                    <li><a href={GOOGLE_URL}>{PROJECTS}</a></li>
                    <li><a href={GOOGLE_URL}>{CONTACT_US}</a></li>
                </ul>
                <ul className="info__links second__column">
                    <li><a href={GOOGLE_URL}>{FAQ}</a></li>
                    <li><a href={GOOGLE_URL}>{TERMS}</a></li>
                    <li><a href={GOOGLE_URL}>{CAREERS}</a></li>
                </ul>
                <ul className="info__links three__column">
                    <li><a href={GOOGLE_URL}>{BLOG}</a></li>
                    <li><a href={GOOGLE_URL}>{PARTNERS}</a></li>
                    <li><a href={GOOGLE_URL}>{NEWS}</a></li>
                </ul>
                <ul className="info__contactUS">
                    <li>{CONTACT_US}</li>
                    <li>{ADDRESS}</li>
                    <li>{PHONE}</li>
                    <li>{EMAIL}</li>
                </ul>
                <article className="socials">
                    <img src={objectPng} alt=""/>
                    <img src={objectPng1} alt=""/>
                    <img src={objectPng2} alt=""/>
                </article>
            </article>
        </section>
    )


export default InfoFooter