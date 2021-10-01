const todoReducer = (state, action) => {
  if(action.type === 'NEW_TODO') {
    return [...state, {title: inputValue}]
  }
  if(action.type === 'REMOVE_TODO') {
    return state.filter(item => item.title !== buttonID)
  }
  return state;
}

export default todoReducer;
