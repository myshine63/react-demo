import todoConstants from "./todoConstants";

export const setVisibilityFilter = (filterType) => {
  return {
    type: todoConstants.SET_VISIBILITY_FILTER,
    payload: filterType
  }
}

export const addTodo = (todo) => {
  return {
    type: todoConstants.ADD_TODO,
    payload: todo
  }
}

export const toggleTodo = (index) => {
  return {
    type: todoConstants.TOGGLE_TODO,
    payload: index
  }
}