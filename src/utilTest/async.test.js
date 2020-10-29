test('测试异步回调方法', done => {
  const callback = data => {
    expect(1).toBe(1)
    done();//这里需要调用done
  }
  setTimeout(callback, 100)
})

test('测试promise', () => {
  // 需要返回一个promise
  return Promise.resolve(1).then(data => {
    expect(data).toBe(1)
  })
})

test('测试错误的promise', () => {
  expect.assertions(1);
  return Promise.reject('error').catch(e => {
    expect(e).toMatch('error')
  })
})

test('测试async await', async () => {
  let data = await Promise.resolve(1);
  expect(data).toBe(1);
})
