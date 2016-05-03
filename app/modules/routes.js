import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App.jsx';
import Login from '../components/Login/Login.jsx';
import Repos from '../components/Repos/Repos.jsx';
import Todo from '../components/Todo/Todo.jsx';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

export default (
	<Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path="/login" component={Login}/>
    	<Route path="/todo" component={Todo}/>
    </Route>
    <Route path="/repos/:userName/:repoName" component={Repos}/>
  </Router>
)
