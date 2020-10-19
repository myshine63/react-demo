import {createStore, combineReducers} from 'redux'

import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers({todoReducer});
const store = createStore(rootReducer)
export default store