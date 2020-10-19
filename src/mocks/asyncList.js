import Mock from "mockjs";

export default Mock.mock('/getList', 'post', function (option) {
  return {
    data: [{name: 'tom'}]
  }
})
