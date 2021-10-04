import React from "react";
import { connect } from "react-redux";
import { deleteTodo} from "../redux/action/addTodo.action";

const Todo = ({ todo, id, deleteTodo}) => {
  return (
    <div className='todos-item'>
      <div>{todo}</div>
      <div onClick={() => deleteTodo(id)}>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
});

export default connect(
  null ,
  mapDispatchToProps
)(Todo);