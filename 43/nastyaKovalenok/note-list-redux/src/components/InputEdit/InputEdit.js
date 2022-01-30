import {useDispatch} from "react-redux";
import {useState} from "react";
import {ACTION_EDIT_NOTE} from "../../ducks/NotesRedux/NoteRedux";

const InputEdit = ({value, id}) => {
    const dispatch = useDispatch()
    const [valueInput, setInputValue] = useState('')

    const handlerChangeUseState = (e) => setInputValue(e.target.value)

    const handlerEditNote =  ({target})  => {
        let id = + target.id
        if (valueInput.trim().length !== 0){
            dispatch(ACTION_EDIT_NOTE({
                value: valueInput,
                id: id
            }))
            setInputValue('')
        }
    }

    return (
        <div>
            <input type="text" value={valueInput} onChange={handlerChangeUseState} placeholder={value}/>
            <button id={id} onClick={handlerEditNote}>Apply</button>
        </div>
    )
}

export default InputEdit