import React from 'react'
import {List, ListItem} from 'material-ui/List'
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import {blue500, yellow600} from 'material-ui/styles/colors'
import ActionInfo from 'material-ui/svg-icons/action/info'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import Divider from 'material-ui/Divider';
import {
  Icon_Visa,
  Icon_MasterCard,
  Icon_Discover,
  Icon_AmericanExpress
} from 'material-ui-credit-card-icons';

class CreditCardList extends React.Component {

  constructor(props) {
    super(props)
  }
  
  renderListItems() {
    return(this.props.creditCards.map((creditCard, index) => {
      var length = creditCard.number.length
      return (
        <ListItem
          key = {index}
          leftAvatar={<Avatar icon={this.renderCreditCardIcon(creditCard.type)} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={ `${creditCard.name} (${creditCard.cardName})`}
          secondaryText={ `\u2022\u2022\u2022\u2022 -${creditCard.number.slice(length - 4, length)}` }
          onClick = { (event) => this.props.handleOnListItemClick(event, creditCard)}
        />
      )
    }))
  }

  renderCreditCardIcon(type) {
    if(type.toUpperCase() == "VISA") {
      return (
        <Icon_Visa />
      )
    } else if(type.toUpperCase() == "DISCOVER") {
      return (
        <Icon_Discover />
      )
    } else if(type.toUpperCase() == "MASTERCARD") {
      return (
        <Icon_MasterCard />
      )
    } else if(type.toUpperCase() == "AMEX") {
      return (
        <Icon_AmericanExpress />
      )
    } else {
      return null
    }
  }

  renderAddCreditCard() {
    return (
      <ListItem
        rightIcon = {<AddCircle />}
        primaryText = { "Add card" }
        onClick = { this.props.handleAddCreditCard }
      />
    )
  }

  renderNoCreditCards() {
    return (
      <Subheader>No Credit Cards Added</Subheader>
    )
  }

  render() {
    return (
      <List>
        { this.props.creditCards.length > 0 ? this.renderListItems() : this.renderNoCreditCards()   }
        <Divider inset={true} />
        { this.renderAddCreditCard() }
    </List>
    )
  }
  
}

CreditCardList.propTypes = {
  creditCards: PropTypes.array,
  handleAddCreditCard: PropTypes.func,
  handleOnListItemClick: PropTypes.func
}

export default CreditCardList