import React from 'react'
import TextField from 'material-ui/TextField';
import Payment from 'payment';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      firstName: null, 
      lastName: null,
      exp_month: null,
      exp_year: null,
      cvc: null
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
        />
        <TextField
          name = "last_name"
          hintText="Last Name"
          errorText=""
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
        />
        <TextField
          name = "cvc"
          hintText="CVC"
          errorText=""
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

export default Form