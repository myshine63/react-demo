import todoConstants from "./todoConstants";
import {PrefixConstants} from "../PrefixConstants";

const initState = {
  todos: [],
  visibilityFilter: todoConstants.SHOW_ALL
}

function todoReducer(state = initState, action) {
  const type = action.type
  if (!type.startsWith(PrefixConstants.TODO_REDUCER)) {
    return state
  }
  switch (type.replace(PrefixConstants.TODO_REDUCER, '')) {
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