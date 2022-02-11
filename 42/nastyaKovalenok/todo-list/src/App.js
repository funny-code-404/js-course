
import NotesList from "./components/NotesList/NotesList";
import CreatingNote from "./components/CreatingNote/CreatingNote";
import {ReducerContextProvider} from "./providers/NotesContextProvider";

function App() {
    return (
       /* <NotesContextProvider>*/
        <ReducerContextProvider>
            <CreatingNote/>
            <NotesList/>
        </ReducerContextProvider>
       /* </NotesContextProvider>*/
    );
}

export default App;
