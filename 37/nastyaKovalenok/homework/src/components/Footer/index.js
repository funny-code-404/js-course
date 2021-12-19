import InfoFooter from "../InfoFooter";
import imageInc from "../../image/2017 Inc.png"

const Footer = () => {
    return (
        <footer>
            <section className="action">
                <article className="action__header">Want to build something amazing?</article>
                <article className="button button__action">
                    <div className="button__text">GET IN TOUCH</div>
                </article>
            </section>
            <section className="signUp">
                <article className="signUp__header">Newsletter Signup</article>
                <input className="signUp__input" type="email" placeholder="test@youremail.com"/>
                <article className="button button__signUp">
                    <div className="button__text">SIGNUP</div>
                </article>
            </section>
            <InfoFooter />
            <section className="inc">
                <img src={imageInc} alt="inc"/>
            </section>
        </footer>
    )
}

export default Footer