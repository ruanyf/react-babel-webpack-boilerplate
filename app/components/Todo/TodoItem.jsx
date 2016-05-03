import React from 'react';

export default class TodoItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='completed'>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={true}
          />
          <label>
            待办事项1
          </label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}
