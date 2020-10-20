import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';

import todoReducer from './todo/todoReducer'

// 有一个尝试优化reducer方法,这样可以减少匹配次数
// function reducer(state = {}, action) {
//   if (action.startsWith('prefix')) {
//     switch (action) {
//       case "add":
//         return {name: 'tom'}
//       default:
//         return state
//     }
//   }
//   return state //
// }


const rootReducer = combineReducers({todoReducer});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export default store