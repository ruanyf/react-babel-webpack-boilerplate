import React from 'react';

export default class TodoTextInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input 
      	className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        autoFocus={true}
      />
    );
  }
}
