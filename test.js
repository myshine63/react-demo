const callback = data => {
  console.log(data)
}

function asyncFunc(callback) {
  setTimeout(100, () => {
    callback(111);
  })
}

asyncFunc(callback);