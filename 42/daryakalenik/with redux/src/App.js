import ToDoForm from "./components/ToDoForm";
import ListOfTasks from "./components/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ListOfTasks />
    </div>
  );
}

export default App;
