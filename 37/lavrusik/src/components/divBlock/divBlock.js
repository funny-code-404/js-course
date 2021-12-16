export const DivContentBlock = (props) => {
    const data = props.data;
    return <div className={data.classname}>
        <img src={data.src} alt={data.alt} />
        <h3>{data.headText}</h3>
        <p>{data.pText}</p>
    </div>
}