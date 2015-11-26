const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App.jsx');

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div'))
);
