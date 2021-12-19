const ArticleCardSkill = ({imgCardSkill}) => {
    return (
        <article className="card__skill">
            <img src={imgCardSkill} alt="skill"/>
            <article className="card__skill__header">PROJECT AND CONSTRUCTION MANAGEMENT</article>
            <article className="card__skill__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </article>
        </article>
    )
}

export default ArticleCardSkill