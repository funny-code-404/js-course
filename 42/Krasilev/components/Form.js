import React, {useState, useContext, useReducer} from 'react'
import TodoContext from '../context/todoContext';




const Form = () => {
  const [inputValue, setInputValue] = useState('')
  const [buttonID, setButtonID] = useState('')
  let todoList = useContext(TodoContext);


  const initialState = todoList;

 const [todoState, dispatchTodo] = useReducer(todoReducer, initialState)


  const getInputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTodo({type: 'NEW_TODO', title: inputValue})
  }
  const deleteHandler = (e) => {
    setButtonID(e.target.id)
    dispatchTodo({type: 'REMOVE_TODO'})
  }
  return (
    <>
    <form>
      <input value={inputValue} type="text" onChange={getInputHandler}/>
      <button onClick={submitHandler} type="submit">ADD TODO</button>
    </form>
    <h1>
      {todoState.map((item) => (
        <li key={item.title}>{item.title} <button id={item.title} onClick={deleteHandler}>DELETE</button></li>
      ))}
    </h1>
    </>
  )
}

export default Form;
