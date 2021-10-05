
  export const addTodo = todo => ({
    type: "ADD_TODO",
    payload: todo
  });
  
  export const deleteTodo = key => ({
    type: "DELETE_TODO",
    payload: key
  });
  
  export const deleteAll = () => ({
    type: "DELETE_ALL"
  });