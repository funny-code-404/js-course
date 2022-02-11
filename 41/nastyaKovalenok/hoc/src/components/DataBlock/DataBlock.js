import {withData} from "../../hoc/withData";

const DataBlock = (props) => {
    return <div>
        {props.data.map((item) => (
            <p>{item}</p>
        ))}
    </div>
}

export default withData(DataBlock)