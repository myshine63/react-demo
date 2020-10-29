test('测试异步回调方法', done => {
  const callback = () => {
    // 如果不用try catch，只会显示测试超时，而不会打印测试错误原因
    try {
      expect(1).toBe(1)
      done();//这里需要调用done
    } catch (err) {
      done(err);
    }
  }
  setTimeout(callback, 100)
})

test('测试promise', () => {
  // 需要返回一个promise
  return Promise.resolve(1).then(data => {
    expect(data).toBe(1)
  })
})

it('测试promise2', () => {
  return expect(Promise.resolve(1)).resolves.toBe(1);
})

test('测试错误的promise', () => {
  /*
  *  因为我们希望当前的promise reject，但是resolve了。因此catch方法不会被执行。
  *  因此我们需要添加 expect.assertions(1)，表示我们希望expect执行一次。
  * */
  expect.assertions(1); // 希望expect断言执行一次，如果没有执行1次，则测试错误
  return Promise.resolve('error').catch(e => {
    expect(e).toMatch('error')
  })
})

it('测试拒绝的promise2', () => {
  expect.assertions(1);
  return expect(Promise.reject('error')).rejects('error')
})

test('测试async await', async () => {
  let data = await Promise.resolve(1);
  expect(data).toBe(1);
})

it('测试async await 2', async () => {
  await expect(Promise.resolve(1)).resolves.toBe(1);
})

test('测试错误的async await', async () => {
  expect.assertions(1);
  try {
    await Promise.reject('error')
  } catch (e) {
    expect(e).toMatch('error')
  }
})

test('测试async await 错误2', async () => {
  expect.assertions(1);
  await expect(Promise.reject('error')).rejects.toMatch('error')
})