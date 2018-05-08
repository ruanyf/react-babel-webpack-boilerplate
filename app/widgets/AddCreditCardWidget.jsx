import React from 'react'
import PropTypes from 'prop-types'
import AddForm from '../components/AddForm/AddForm.jsx';

class AddCreditCardWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AddForm
        userId = {this.props.userId}
        handleAddNewCreditCard = { this.props.handleAddNewCreditCard}
      />
    )
  }
}

AddCreditCardWidget.propTypes = {
  userId: PropTypes.string,
  handleAddNewCreditCard: PropTypes.func
}

export default AddCreditCardWidget