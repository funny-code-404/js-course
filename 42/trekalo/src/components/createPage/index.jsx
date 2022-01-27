import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_SET_DATA,
  dataReducer,
  dataSelector,
} from "../../ducks/sampleData";

export function CreatePage() {
  const dispatch = useDispatch(dataReducer);

  const dataTodoArr = useSelector(dataSelector);

  const handleSubmit = (e) => {
    const todoInput = e.target.elements.todo;
    e.preventDefault();
    dispatch(
      ACTION_SET_DATA({
        todoText: todoInput.value,
        id: dataTodoArr.length,
        editStatus: false,
        selected: "low",
      })
    );
    todoInput.value = "";
    todoInput.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" />
      <button>create</button>
    </form>
  );
}
