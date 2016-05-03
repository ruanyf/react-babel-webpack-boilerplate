import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Mainer from './Mainer.jsx';

require('./css/app.css');
require('./todomvc-common/base.css');

export default class Todo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="todoapp">
        <Header />
        <Mainer />
        <Footer />
      </div>
    );
  }
}
