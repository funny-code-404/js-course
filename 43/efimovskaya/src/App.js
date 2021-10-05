import React from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll} from "./redux/action/addTodo.action";
import { connect } from "react-redux";

const App = ({ deleteAll}) => {
  return (
    <div className="App">
      <h1> Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
        className="button-delAll"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);