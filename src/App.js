import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import asyncLoad from "./utils/asyncLoad";
import {Layout} from "antd";
//--- page component ---//
const Home = asyncLoad(() => import('./pages/home/Home'))
const ErrorPage = asyncLoad(() => import('./pages/errorPage/ErrorPage'));
const RefsPage = asyncLoad(() => import('./pages/refs/RefsPage'));
const ContextPage = asyncLoad(() => import('./pages/context/ContextPage'));
const RenderPropPage = asyncLoad(() => import('./pages/render-prop/RenderPropPage'));

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/home' component={Home} exact={true}/>
          <Route path='/err' component={ErrorPage} exact={true}/>
          <Route path='/refs' component={RefsPage} exact={true}/>
          <Route path='/context' component={ContextPage} exact={true}/>
          <Route path='/render-prop' component={RenderPropPage} exact={true}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
