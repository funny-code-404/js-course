import InfoFooter from "../InfoFooter";
import imageInc from "../../image/2017 Inc.png"
import {GET_IN_TOUCH, ACTION_HEADER, SIGNUP, SIGNUP_HEADER} from "../../constants";

const Footer = () =>
    (
        <footer>
            <section className="action">
                <article className="action__header">{ACTION_HEADER}</article>
                <article className="button button__action">
                    <div className="button__text">{GET_IN_TOUCH}</div>
                </article>
            </section>
            <section className="signUp">
                <article className="signUp__header">{SIGNUP_HEADER}</article>
                <input className="signUp__input" type="email" placeholder="test@youremail.com"/>
                <article className="button button__signUp">
                    <div className="button__text">{SIGNUP}</div>
                </article>
            </section>
            <InfoFooter/>
            <section className="inc">
                <img src={imageInc} alt="inc"/>
            </section>
        </footer>
    )


export default Footer