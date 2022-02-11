import {withRequestData} from "../../hoc/withRequestData";

const DogList = ({data}) => {

    function renderLi(item) {
        return (
            <ul>
                <li>
                    {item}
                </li>
            </ul>
        )
    }

    console.log(data)

    const checkAndRender = (arr) => {
        return arr.map((item, index) =>
            item.length >= 1
            ? item.map((el) => renderLi(el))
            : renderLi(item))
    }

    console.log(checkAndRender(data))
    return (
        <div>
            <h1>Dog list</h1>
            <ul>
                {checkAndRender(data)}
            </ul>
        </div>
    )
}

export default withRequestData(DogList)
