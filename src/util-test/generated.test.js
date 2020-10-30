it('测试变化的数据', () => {
  const user = {
    name: 'tom',
    birthday: new Date(),
    age: Math.floor(Math.random() * 10)
  }
  expect(user).toMatchSnapshot({
    birthday: expect.any(Date),
    age: expect.any(Number)
  })
})