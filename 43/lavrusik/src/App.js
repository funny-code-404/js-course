import { Form } from './components/From/Form';
import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import { useSelector } from 'react-redux';
import { dataSelector } from './ducks/sampleData';
function App() {
   const data = useSelector(dataSelector);
  return<>
    <Form />
    <TaskList/>
    </>
}

export default App;
