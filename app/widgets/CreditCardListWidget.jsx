import React from 'react'
import CreditCardList from '../components/CreditCardList/CreditCardList.jsx'
import PropTypes from 'prop-types'

class CreditCardListWidget extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        creditCards: []
      }
      this.getCreditCards()
    }

    getCreditCards() {
      fetch('http://localhost:8082/creditCards/' + this.props.userId )
      .then(response => response.json())
      .then(data => {
        this.setState({
          creditCards: data.creditCards[0] ? data.creditCards[0].cards : []
        })
      })
    }

    render() {
      return (
        <CreditCardList
          creditCards = { this.state.creditCards }
          handleAddCreditCard = { this.props.handleAddCreditCard }
          handleOnListItemClick = { this.props.handleOnListItemClick }
        />
      )
    }
}

CreditCardListWidget.propTypes = {
  creditCards: PropTypes.array,
  handleAddCreditCard: PropTypes.func,
  handleOnListItemClick: PropTypes.func
}

export default CreditCardListWidget