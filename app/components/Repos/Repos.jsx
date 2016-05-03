import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div>
        	<h2>Repos</h2>
        	
          {/* add some links */}
          <ul>
            <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
            <li><Link to="/repos/facebook/react">React</Link></li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

