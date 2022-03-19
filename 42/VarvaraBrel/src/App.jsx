import { DataContextProvider } from './provider/DataContextProvider';
import ToDoListContext from './components/ToDoContext';
import ToDoListReducer from './components/ToDoReducer';
import { ReducerContextProvider } from './ducks/reducer/Reducer';

function App() {
  return (
    <div>
      {/* <DataContextProvider>
        <ToDoListContext />
      </DataContextProvider> */}
      <ReducerContextProvider>
        <ToDoListReducer />
      </ReducerContextProvider>
    </div>
  );
}

export default App;
