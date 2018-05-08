import React from 'react'
import PropTypes from 'prop-types'
import CreditCardEdit from '../components/CreditCardEdit/CreditCardEdit.jsx'


class ManageCardWidget extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CreditCardEdit
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