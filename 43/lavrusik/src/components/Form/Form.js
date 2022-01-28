import { useDispatch } from "react-redux"
import { ACTION_SET_DATA } from "../../ducks/sampleData"
import { useSelector } from "react-redux";
import { dataSelector } from "../../ducks/sampleData";
export const Form = () => {
    const dispatch = useDispatch();
    const data = useSelector(dataSelector);
    const handlSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        console.dir(target.elements.taskInput.value);
        dispatch(ACTION_SET_DATA(target.elements.taskInput.value));
    }
    return <form onSubmit={handlSubmit}>
        <input name="taskInput" placeholder="Enter task"/>
        <button>Create</button>
    </form>
}