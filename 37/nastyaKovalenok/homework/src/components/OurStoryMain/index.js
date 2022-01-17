import ImagesOurStory from "../ImagesOurStory";
import {KONSTRUCT, OUR_STORY} from "../../constants";

const OurStoryMain = () => {
    const TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.' +
        ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.';

     return (
        <section className="our__story">
            <header className="our__story__header">
                <h3>{OUR_STORY}</h3>
            </header>
            <article className="our__story__text">
                <p className="our__story__text__h3">Founded in 2011 by John Mathew Smith, <span>{KONSTRUCT}</span> has
                    become the number one
                    construction management firm</p>
                <p className="our__story__text__p">{TEXT}</p>
            </article>
            <ImagesOurStory />
        </section>
    )
}

export default OurStoryMain