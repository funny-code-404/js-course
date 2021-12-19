import ImagesOurStory from "../ImagesOurStory";

const OurStoryMain = () => {
    return (
        <section className="our__story">
            <header className="our__story__header">
                <h3>OUR STORY</h3>
            </header>
            <article className="our__story__text">
                <p className="our__story__text__h3">Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has
                    become the number one
                    construction management firm</p>
                <p className="our__story__text__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt
                    ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </article>
            <ImagesOurStory />
        </section>
    )
}

export default OurStoryMain