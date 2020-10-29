import todoConstants from "./todoConstants"
import {PrefixConstants,actionFunctionCreator} from "../PrefixConstants";

let FunctionCreator = actionFunctionCreator(PrefixConstants.TODO_REDUCER);
export const setVisibilityFilter = FunctionCreator(todoConstants.SET_VISIBILITY_FILTER);
export const addTodo = FunctionCreator(todoConstants.ADD_TODO);
export const toggleTodo = FunctionCreator(todoConstants.TOGGLE_TODO);