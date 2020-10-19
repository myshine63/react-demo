import React from "react";
import {
  Link,
  Route, Switch, useRouteMatch,
} from 'react-router-dom';

function RouterPage() {
  const match = useRouteMatch();
  return (
  <div>
    <h1>这是一个嵌套路由的demo</h1>
    <ul>
      <li>
        <Link to='/router-page/1'>子路由：page1</Link>
      </li>
      <li>
        <Link to='/router-page/2'>子路由：page2</Link>
      </li>
    </ul>
    <Switch>
      <Route path={`${match.url}/1`}>
        <h3>this is page 1</h3>
      </Route>
      <Route path={`${match.url}/2`}>
        <h3>this is page 2</h3>
      </Route>
    </Switch>
  </div>
  )
}

export default RouterPage