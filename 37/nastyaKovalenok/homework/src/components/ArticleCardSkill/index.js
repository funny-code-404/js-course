import {SKILL_HEADER, TEXT_LOREM} from "../../constants";

const ArticleCardSkill = ({imgCardSkill}) =>
    (
        <article className="card__skill">
            <img src={imgCardSkill} alt="skill"/>
            <article className="card__skill__header">{SKILL_HEADER}</article>
            <article className="card__skill__text">{TEXT_LOREM}
            </article>
        </article>
    )


export default ArticleCardSkill