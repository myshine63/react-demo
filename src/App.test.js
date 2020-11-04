import App from "./App";
import React from "react";
import renderer from 'react-test-renderer'

it('app组件', () => {
  const app = renderer.create(<App/>).toJSON();
  expect(app).toMatchSnapshot();
})