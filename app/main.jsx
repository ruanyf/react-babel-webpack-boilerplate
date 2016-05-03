import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import routes from './modules/routes.js';

ReactDOM.render((
	<Router routes={routes} history={hashHistory}></Router>
	),document.body.appendChild(document.createElement('div'))
);
