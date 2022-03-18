import { DataContextProvider } from "./context/dataContextProvider";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

function App() {
  return (
    <DataContextProvider>
      <ToDoForm />
      <ToDoList />
    </DataContextProvider>
  );
}

export default App;
