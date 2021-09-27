import './App.css';
import List from './components/List';
import Form from './components/Form';
import TodoListContextProvider from './containers/contextProvider';

function App() {
  return (
    <TodoListContextProvider>
      <List />
      <Form />
    </TodoListContextProvider>
  );
}

export default App;
