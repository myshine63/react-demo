import todoConstants from "./todoConstants";

const initState = {
  todos: [],
  visibilityFilter: todoConstants.SHOW_ALL
}

function todoReducer(state = initState, action) {
  switch (action.type) {
    case todoConstants.SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.payload}

    case todoConstants.ADD_TODO: {
      let todos = state.todos.concat(action.payload)
      return {...state, todos}
    }

    case todoConstants.TOGGLE_TODO: {
      let todos = state.todos.map(((value, index) => {
        if (index === action.payload) {
          return {...value, completed: !value.completed}
        }
        return value
      }))
      return {
        ...state, todos
      }
    }

    default:
      return state
  }
}

export default todoReducer