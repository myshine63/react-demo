import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';

import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers({todoReducer});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export default store