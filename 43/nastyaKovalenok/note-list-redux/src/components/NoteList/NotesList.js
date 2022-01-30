import {useSelector, useDispatch} from "react-redux";
import {
    ACTION_DELETE_NOTE,
    ACTION_OPEN_WINDOW_FOR_EDIT,
    notesSelector,
} from "../../ducks/NotesRedux/NoteRedux";
import './NotesList.css'
import InputEdit from "../InputEdit/InputEdit";

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

    console.log(state)

    return (
        <div className='wrapperList'>
            {state.map((item) => (
                <div className='noteItem' key={item.id}>
                    {item.value}
                    <hr/>
                    <button id={item.id} className='buttonDel' onClick={handlerRemoteNote}>Удалить</button>
                    <button id={item.id} className='buttonEdit' onClick={handlerToggleShowInput}>Редактировать</button>
                    {item.isShowEdit && <InputEdit value = {item.value} id = {item.id}/>}
                </div>
            ))}
        </div>
    )
}

export default NotesList