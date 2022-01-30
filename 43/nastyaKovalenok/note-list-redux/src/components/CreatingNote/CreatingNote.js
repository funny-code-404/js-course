import './CreatingNote.css'
import { useState} from "react";
import {useDispatch} from "react-redux";
import {ACTION_CREATE_NOTE} from "../../ducks/NotesRedux/NoteRedux";

const CreatingNote = () => {

    const dispatch = useDispatch()

    const [valueInput, setInputValue] = useState('')

    const handlerChangeUseState = (e) => setInputValue(e.target.value)

    const handlerCreateClick = (e) => {
        if (valueInput.trim().length !== 0){
            dispatch(ACTION_CREATE_NOTE(valueInput))
            setInputValue('')
        }
    }

    return (
        <div className='wrapper'>
            <input type="text"
                   placeholder='Введите текст'
                   className='inputNote'
                   value={valueInput}
                   onChange={handlerChangeUseState}/>
            <button onClick={handlerCreateClick}>Создать</button>
        </div>
    )
}

export default CreatingNote