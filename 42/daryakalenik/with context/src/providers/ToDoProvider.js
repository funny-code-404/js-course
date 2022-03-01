import React, { useState, useContext } from "react";

const ToDoContext = React.createContext();

const initialToDoListState = [`Learn React Context`];

export const ToDoProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(initialToDoListState);
  const addToDo = (newToDoItem) => {
    setToDoList([...toDoList, newToDoItem]);
  };
  const removeToDo = (toDoIndex) => {
    const newList = toDoList.filter((_, index) => index !== toDoIndex);
    setToDoList(newList);
  };
  const contextValue = { toDoList, addToDo, removeToDo };
  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);
