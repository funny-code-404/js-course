import React from 'react'
import Form from './components/Form';
import TodoContext from './context/todoContext';

function App() {
  const DUMMY_TODO =   [
    { title: "Learn React", },
    { title: "Learn Typescript" },
    { title: "Get a job" },
  ]
  return (
    <TodoContext.Provider value={DUMMY_TODO}>
    <Form/>
    </TodoContext.Provider>
  );
}

export default App;
