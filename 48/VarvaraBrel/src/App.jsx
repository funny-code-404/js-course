import { DataContextProvider } from './context/ContextProvider';
import ToDoList from './component/ToDo/index';

function App() {
  return (
    <DataContextProvider>
      <ToDoList />
    </DataContextProvider>
  );
}

export default App;
