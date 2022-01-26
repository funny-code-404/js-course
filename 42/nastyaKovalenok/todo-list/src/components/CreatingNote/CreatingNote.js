
import './CreatingNote.css'
import {useContext, useState} from "react";
import {ACTION_CREATE_NOTE, ReducerContext} from "../../providers/NotesContextProvider";

const CreatingNote = () => {

    const {state, dispatch} = useContext(ReducerContext)

    const [valueInput, setInputValue] = useState('')

    const handlerChange = (e) => setInputValue(e.target.value)

    const handlerCreateClick = (e) => {
        e.preventDefault();
        if (valueInput.trim().length !== 0){
            dispatch(ACTION_CREATE_NOTE(valueInput))
            setInputValue('')
        }
    }
console.log(state)

    return (
        <div className='wrapper'>
            <input type="text"
                   placeholder='Введите текст'
                   className='inputNote'
                   value={valueInput}
                   onChange={handlerChange}/>
            <button onClick={handlerCreateClick}>Создать</button>
        </div>
    )
}

export default CreatingNote