import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link
} from "react-router-dom";
import {Layout} from "antd";
import asyncLoad from "./utils/asyncLoad";
import './App.scss'
//--- page component ---//
const Home = asyncLoad(() => import('./pages/home/Home'))
const ErrorPage = asyncLoad(() => import('./pages/errorPage/ErrorPage'));
const RefsPage = asyncLoad(() => import('./pages/refs/RefsPage'));
const RenderPropPage = asyncLoad(() => import('./pages/render-prop/RenderPropPage'));
const RouterPage = asyncLoad(() => import('./pages/react-router/RouterPage'));
const TodoPage = asyncLoad(() => import('./pages/todo/TodoPage'));

const {Sider, Content} = Layout

function App() {
  return (
  <Router>
    <Layout className='app'>
      <Sider>
        <ul className='aside-container'>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/err'>err</Link>
          </li>
          <li>
            <Link to='/refs'>refs</Link>
          </li>
          <li>
            <Link to='/router-page'>router-page</Link>
          </li>
          <li>
            <Link to='/todo'>todo11</Link>
          </li>
        </ul>
      </Sider>
      <Layout>
        <Content>
          <Switch>
            <Route path='/' exact={true}>
              <Redirect to='/home'/>
            </Route>
            <Route path='/home' component={Home} exact={true}/>
            <Route path='/err' component={ErrorPage} exact={true}/>
            <Route path='/refs' component={RefsPage} exact={true}/>
            <Route path='/render-prop' component={RenderPropPage} exact={true}/>
            {/*因为router-page要是用嵌套路由，因此不能使用exact*/}
            <Route path='/router-page' component={RouterPage}/>
            <Route path='/todo' component={TodoPage}/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Router>
  );
}

export default App;
