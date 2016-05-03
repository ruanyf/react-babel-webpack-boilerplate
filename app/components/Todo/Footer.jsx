import React from 'react';

export default class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {

  	// Undefined and thus not rendered if no completed items are left.
  	const BASECONFIG = "BASE-CONFIG"
    let clearCompletedButton
    let completed = true
    if (completed) {
      clearCompletedButton =
        <button
          id="clear-completed">
          Clear completed
        </button>
    } 

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            1111
          </strong>
          items left
        </span>
        {clearCompletedButton}
      </footer>
    );
  }
}
