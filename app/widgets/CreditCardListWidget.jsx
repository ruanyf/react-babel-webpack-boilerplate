import React from 'react'
import CreditCardList from '../components/CreditCardList/CreditCardList.jsx'
import PropTypes from 'prop-types'

class CreditCardListWidget extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <CreditCardList
          creditCards = { this.props.creditCards }
          handleAddCreditCard = { this.props.handleAddCreditCard }
        />
      )
    }
}

CreditCardListWidget.propTypes = {
  creditCards: PropTypes.array,
  handleAddCreditCard: PropTypes.func
}

export default CreditCardListWidget