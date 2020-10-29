export const PrefixConstants = {
  TODO_REDUCER: 'TODO_REDUCER_'
}

export const actionFunctionCreator = prefix => constants => payload => {
  return {
    type: prefix.concat(constants),
    payload
  }
}