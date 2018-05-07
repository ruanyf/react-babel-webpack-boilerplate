import React from 'react'
import PropTypes from 'prop-types'
import Form from '../components/Form/Form.jsx';

class AddCreditCardWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form
        userId = {this.props.userId}
      />
    )
  }
}

AddCreditCardWidget.propTypes = {
  userId: PropTypes.string
}

export default AddCreditCardWidget