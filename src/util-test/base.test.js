it('相等匹配', () => {
  let a = 0;
  expect(a).toBe(0);
  expect(a).not.toBeTruthy();
  expect(a).toBeFalsy();
  expect(a).not.toBeUndefined();
  expect(a).not.toBeNull();
  let b = {name: 'tom'};
  expect(b).toEqual({name: 'tom'}); // 匹配对象
  expect(0.1 + 0.2).toBeCloseTo(0.3); // 测试浮点数
  // 测试大小
  expect(4).toBeGreaterThan(3);
  expect(4).toBeGreaterThanOrEqual(3.5);
  expect(4).toBeLessThan(5);
  expect(4).toBeLessThanOrEqual(4.5);
  expect([1, 2, 3]).toContain(2);
  // 测试字符串
  expect('tom is a boy').toMatch('tom is a boy')
  expect('tom is a boy').toMatch(/tom/)

})

it('测试抛出错误', () => {
  function throwError() {
    throw new Error('error')
  }

  // 需要传入一个方法，该方法在调用后会抛出一个错误
  expect(throwError).toThrow()
  expect(throwError).toThrow(Error)
  expect(throwError).toThrow('error')
})