import {BUILD, MANAGE, PLAN, WE} from "../../constants";

const ImagesOurStory = () =>
     (
        <article className="our__story__images">
            <div className="our__story__image1">
                <p>{WE}</p>
                <p>{PLAN}</p>
            </div>
            <div className="our__story__image2">
                <p>{WE}</p>
                <p>{MANAGE}</p>
            </div>
            <div className="our__story__image3">
                <p>{WE}</p>
                <p>{BUILD}</p>
            </div>
        </article>
    )

export default ImagesOurStory