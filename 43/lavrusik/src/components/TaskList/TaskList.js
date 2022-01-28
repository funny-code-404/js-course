import { useSelector } from "react-redux";
import { dataSelector } from "../../ducks/sampleData";
import { ACTION_DELETE_DATA } from "../../ducks/sampleData";
import { useDispatch } from "react-redux";
export const TaskList = () => {
    const dispatch = useDispatch();
    const data = useSelector(dataSelector);
    const handlClick = (e) => {
        const idItem = e.target.id;
        const newData = data;
        newData.splice(idItem, 1);
        dispatch(ACTION_DELETE_DATA(newData));
    }
    return data && <div>
        {data.map(item => {
            return <div className="task" key={data.indexOf(item)}>
                <h1>Task {data.indexOf(item)+1}</h1>
                <h3>{item}</h3>
                <button id={data.indexOf(item)} onClick={handlClick}>Delete task</button>
            </div>
        })}
    </div>
}