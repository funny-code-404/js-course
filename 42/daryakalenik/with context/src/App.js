import ToDoForm from "./components/ToDoForm";
import ListOfTasks from "./components/ToDoList";
import { ToDoProvider } from "./providers/ToDoProvider";

function App() {
  return (
    <div>
      <h1>TO DO LIST</h1>
      <ToDoProvider>
        <ToDoForm />
        <ListOfTasks />
      </ToDoProvider>
    </div>
  );
}

export default App;
