import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Payment from 'payment';
import RaisedButton from 'material-ui/RaisedButton';

class CreditCardEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.selected.number,
      firstName: this.props.selected.firstName, 
      lastName: this.props.selected.lastName,
      expiration: this.props.selected.expiration,
      cvv: this.props.selected.cvv
    }
  }

  componentDidMount() {
    const number = document.getElementsByName("number")
    const expiration = document.getElementsByName("expiration")
    const cvc = document.getElementsByName("cvc")

    Payment.formatCardNumber(number)
    Payment.formatCardExpiry(expiration)
    Payment.formatCardCVC(cvc)
  }

  renderName() {
    return (
      <div>
        <TextField
          name = "first_name"
          hintText="First Name"
          errorText=""
          defaultValue = { this.state.firstName }
        />
        <TextField
          name = "last_name"
          hintText="Last Name"
          errorText=""
          defaultValue = { this.state.lastName }
        />
      </div>
    )
  }

  renderCreditCardNumber() {
    return (
      <div>
      <TextField
        name = "number"
        hintText="Credit Card Number"
        errorText="The error text can be as long as you want, it will wrap."
        defaultValue = { this.state.number }
      />
      </div>
    )
  }

  renderCardList() {

  }

  renderCreditCardInfo() {
    return (
      <div>
        <TextField
          name = "expiration"
          hintText="Expiration"
          errorText=""
          defaultValue = { this.state.expiration }
        />
        <TextField
          name = "cvc"
          hintText="CVC"
          errorText=""
          defaultValue = { this.state.cvv }
        />
      </div>
    )
  }

  
  render() {
    return(
      <div>
        {this.renderName()}
        <br />
        { this.renderCreditCardNumber() }
        <br />
        { this.renderCreditCardInfo() }
        <br/>
        <RaisedButton label="Add" primary={true}/>
      </div>
    )
  }
}

CreditCardEdit.PropTypes = {
  selected: PropTypes.object
}

export default CreditCardEdit