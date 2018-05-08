import React from 'react'
import PropTypes from 'prop-types'
import EditForm from '../components/EditForm/EditForm.jsx'


class ManageCardWidget extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <EditForm
        userId = { this.props.userId }
        selected = { this.props.selected }
        handleDeleteCreditCard = { this.props.handleDeleteCreditCard }
      />
    )
  }
}

ManageCardWidget.PropTypes = {
  userId: PropTypes.string,
  selected: PropTypes.object,
  handleDeleteCreditCard: PropTypes.func
}

export default ManageCardWidget