import {useSelector, useDispatch} from "react-redux";
import {
    ACTION_DELETE_NOTE,
    ACTION_OPEN_WINDOW_FOR_EDIT, ACTION_PRIORITY_SELECTION,
    notesSelector,
} from "../../ducks/NotesRedux/NoteRedux";
import './NotesList.css'
import InputEdit from "../InputEdit/InputEdit";
import classNames from "classnames";

const NotesList = () => {

    const dispatch = useDispatch()
    const state = useSelector(notesSelector)

    const handlerRemoteNote = ({target}) => {
        let id = +target.id
        dispatch(ACTION_DELETE_NOTE(id))
    }

    const handlerToggleShowInput = ({target}) => {
        let id = +target.id
        dispatch(ACTION_OPEN_WINDOW_FOR_EDIT(id))
    }

    const handlerPrioritySelectionChange =  ({target})  => {
        let id = + target.id
            dispatch(ACTION_PRIORITY_SELECTION({
                value: target.value,
                id: id
            }))
    }


    return (
        <div className='wrapperList'>
            {state.map((item) => (
                <div className={classNames('noteItem',item.priority)} key={item.id}>
                    {item.value}
                    <hr/>
                    <button id={item.id} className='buttonDel' onClick={handlerRemoteNote}>Удалить</button>
                    <button id={item.id} className='buttonEdit' onClick={handlerToggleShowInput}>Редактировать</button>

                    {item.isShowEdit && <InputEdit value = {item.value} id = {item.id}/>}
                    <select id={item.id} defaultValue='Выберите приоритет' onChange={handlerPrioritySelectionChange}>
                        <option disabled>Выберите приоритет</option>
                        <option value="low">Низкий</option>
                        <option value="medium" >Средний</option>
                        <option value="high">Высокий</option>
                    </select>
                </div>
            ))}
        </div>
    )
}

export default NotesList