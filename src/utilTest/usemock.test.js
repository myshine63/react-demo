import axios from 'axios'
import User from './Helper/User'

jest.mock('axios');
// 使用jest.fn()生成一个mock函数，该函数的mock属性，可以记录该函数在调用时的情况
describe('测试模块函数', () => {
  test('mock函数的常用属性', () => {
    function forEach(items, callback) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }

    // 生成一个mock函数
    const mockCallback = jest.fn(x => x);
    // 调用mock函数
    forEach([0, 1], mockCallback);
    let {calls, results} = mockCallback.mock;
    expect(calls.length).toBe(2);// mock函数的调用次数。
    expect(calls[0][0]).toBe(0);// mock函数第一次调用时的参数为0
    expect(calls[1][0]).toBe(1);
    expect(results[0].value).toBe(0);// mock函数第一次调用返回值为0
    expect(results[1].value).toBe(1);// mock函数第二次调用返回值为1
  })
  test('设置mock函数返回值', () => {
    let mockFn = jest.fn();
    mockFn.mockReturnValueOnce(0).mockReturnValueOnce(1); // 设置mock函数的调用返回值
    let arr = [0, 1].filter((value) => {
      return mockFn(value);
    })
    expect(arr).toEqual([1]);
    let {calls, results} = mockFn.mock;
    expect(calls.length).toBe(2);// mock函数的调用次数。
    expect(calls[0][0]).toBe(0);// mock函数第一次调用时的参数为0
    expect(calls[1][0]).toBe(1);
    expect(results[0].value).toBe(0);// mock函数第一次调用返回值为0
    expect(results[1].value).toBe(1);// mock函数第二次调用返回值为1
  })
})

describe('模拟模块', () => {
  // 该测试希望axios的get方法返回值时{name:'tom'};因此调用了axios.get的地方返回的promise的resolve值时{name:'tom'}
  test('测试模拟axios模块', () => {
    // 使用jest.mock可以模拟一个模块
    axios.get.mockResolvedValue({name: 'tom'});
    return expect(User.all()).resolves.toEqual({name: 'tom'});
  })
})
