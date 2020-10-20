const store = {};

store.dispatch = (action) => {
  console.log(action);
}

store.getState = () => {
  console.log(1111111)
}

function logType(next, store) {
  return function (action) {
    console.log('type:', action.type);
    next && next(action)
    store.getState();
  }
}

function logPayload(next, store) {
  return function (action) {
    console.log('payload:', action.payload);
    next && next(action)
    store.getState();
  }
}


function applyMid(store, mid) {
  let a = [...mid];
  a.reverse();
  let dispatch = store.dispatch;
  for (let i = 0; i < a.length; i++) {
    dispatch = a[i](dispatch, store)
  }
  store.dispatch = dispatch;
}

applyMid(store, [logType, logPayload])

store.dispatch({
  type: 'aaa',
  payload: 1
})