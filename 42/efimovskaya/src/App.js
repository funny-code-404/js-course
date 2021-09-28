import Form from './components/Form';
import DataWithReducer from './ducks/FirstReducer';


function App() {
  return (
    <DataWithReducer>
      <Form />
    </DataWithReducer>
  );
}

export default App;
