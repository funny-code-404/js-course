import React, { useRef } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  dataReducer,
  ACTION_DELETE_SET_DATA,
  ACTION_EDIT_SET_DATA,
  ACTION_APPLY_SET_DATA,
  ACTION_SELECT_BORDER_DATA,
} from "../../ducks/sampleData";
import "./styles.css";

export function TodoList() {
  const dataTodoArr = useSelector(dataSelector);
  const dispatch = useDispatch(dataReducer);

  const handleClickDelete = (e) =>
    dispatch(ACTION_DELETE_SET_DATA(e.target.id));

  const handleClickEdit = (e) => {
    dispatch(ACTION_EDIT_SET_DATA({ id: e.target.id }));
  };
  const handleChange = (e) => {
    dispatch(
      ACTION_SELECT_BORDER_DATA({ id: e.target.id, value: e.target.value })
    );
  };
  return (
    <div>
      {dataTodoArr.map((item, index) => (
        <div
          key={index}
          className={cx("todo_item", {
            "green-todo": item.selected === "low",
            "blue-todo": item.selected === "middle",
            "red-todo": item.selected === "high",
          })}
        >
          <p className="todo_item_title">{item.todoText}</p>
          <button id={item.id} onClick={handleClickDelete}>
            DELETE
          </button>
          <button id={item.id} onClick={handleClickEdit}>
            Edit
          </button>
          <select id={item.id} onChange={handleChange}>
            <option value="low">Низкий приоритет</option>
            <option value="middle">Средний приоритет</option>
            <option value="high">Высокий приоритет</option>
          </select>
          {item.editStatus && <EditItem id={item.id} />}
        </div>
      ))}
    </div>
  );
}

function EditItem({ id }) {
  const textInput = useRef(null);

  const dispatch = useDispatch(dataReducer);

  const handleClickApply = () => {
    dispatch(
      ACTION_APPLY_SET_DATA({ id, newTodoText: textInput.current.value })
    );
  };

  return (
    <div>
      <input ref={textInput} type="text" />
      <button onClick={handleClickApply}>Apply</button>
    </div>
  );
}
