import skillImg from "../../image/skills_img.png"
import skillImg1 from "../../image/skills_img1.png"
import skillImg3 from "../../image/skills_img2.png"
import OurStoryMain from "../OurStoryMain";
import ArticleCardSkill from "../ArticleCardSkill";
import {ALL_SERVICES, OUR_CAPABILITIES, TEXT_LOREM} from "../../constants";

const Main = () =>
     (
        <main>
            <OurStoryMain />
            <section className="our__capabilities">
                <header className="our__capabilities__header"><span>{OUR_CAPABILITIES}</span></header>
                <article className="our__capabilities__text">
                    <p>{TEXT_LOREM}</p>
                </article>
                <article className="button">
                    <div className="button__text">{ALL_SERVICES}</div>
                </article>
            </section>
            <section className="card__skills">
                <ArticleCardSkill imgCardSkill={skillImg} />
                <ArticleCardSkill imgCardSkill={skillImg1} />
                <ArticleCardSkill imgCardSkill={skillImg3} />
            </section>
        </main>
    )


export default Main