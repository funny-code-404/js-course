
import {useContext} from "react";
import {ACTION_DELETE_NOTE, ReducerContext} from "../../providers/NotesContextProvider";
import './NoteList.css'

const NotesList = () => {

    const {state, dispatch} = useContext(ReducerContext)

    const remoteNote = (e) => {
        let id = +e.target.id
        dispatch(ACTION_DELETE_NOTE(id))
    }

    return (
        <div className='wrapper'>
            {state.map((item)=>(
                <div className='noteItem' key={item.id}>
                    {item.value}
                    <button id={item.id} className='buttonDel' onClick={remoteNote}>Удалить</button>
                </div>
            ))}
        </div>
    )
}

export default NotesList