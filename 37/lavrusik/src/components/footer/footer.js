import { Component } from "react";
import { footerHeadText, footerInputText } from "../constants";
import { Button } from "../button/button";
import { footerText } from "../constants";
import imgLogo from '../../image/projeco-logo.svg';
import { ListLink } from "../listLink/listLink";
import { ListLinkText } from "../constants";
export class Footer extends Component{
    render() {
        return <footer className="footer">
            <section className="footer__bg">
                <h4>
                    {footerHeadText}
                </h4>
                <Button Text='GET IN TOUCH'/>
            </section>
            <section className="footer__input">
                <p>{footerInputText}</p>
                <div className="input">
                    <input type="text" placeholder="test@youremail.com" />
                    <Button Text='SIGNUP'/>
                </div>
            </section>
            <section className="footer__footer">
                <article>
                    <a href='#'>{footerText.company.toUpperCase()}</a>    
                    <img src={imgLogo} alt='logo' />
                    <p>{footerText.p }</p> 
                </article>
                <ListLink link={ListLinkText[0]} />
                <ListLink link={ListLinkText[1]} />
                <ListLink link={ListLinkText[2]} />
                <article>
                    <a href='#'>{footerText.link}</a>
                    <p>{footerText.address}</p>
                    <p>{footerText.tel}</p>
                    <a href="#">{footerText.email}</a>
                </article>
                <article>
                    <a className="social facebook" />
                    <a className="social twitter" />
                    <a className="social google" />
                </article>
            </section>
            <section>
                    <p>{footerText.author}</p>
                </section>
        </footer>
    }
}