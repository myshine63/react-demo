import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import asyncLoad from "./utils/asyncLoad";
//--- page component ---//
const Home = asyncLoad(() => import('./pages/home/Home'))
const ErrorPage = asyncLoad(() => import('./pages/errorPage/ErrorPage'));
const RefsPage = asyncLoad(() => import('./pages/refs/RefsPage'));
const ContextPage = asyncLoad(() => import('./pages/context/ContextPage'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home}/>
        <Route path='/err' component={ErrorPage}/>
        <Route path='/refs' component={RefsPage}/>
        <Route path='/context' component={ContextPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
