import React from 'react';
import TodoItem from './TodoItem.jsx';

export default class Mainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
        	<TodoItem />
        </ul>
      </section>
    );
  }
}
