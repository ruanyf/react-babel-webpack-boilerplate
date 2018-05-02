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

class CreditCardList extends React.Component {

  constructor(props) {
    super(props)
  }
  
  renderListItems() {
    return(this.props.creditCards.map((creditCard, index) => {
      return (
        <ListItem
          key = {index}
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText={ creditCard.name }
          secondaryText={ creditCard.number }
          onClick = { (event) => this.props.handleOnListItemClick(event, creditCard)}
        />
      )
    }))
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

  render() {
    return (
      <List>
        { this.renderListItems() }
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