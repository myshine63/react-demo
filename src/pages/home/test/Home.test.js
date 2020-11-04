import React from "react";
import renderer from 'react-test-renderer'
import Home from "../Home";


it('渲染home页面', () => {
  const home = renderer.create(<Home/>).toJSON();
  expect(home).toMatchSnapshot();
})