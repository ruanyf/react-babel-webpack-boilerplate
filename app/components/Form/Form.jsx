import React from 'react'
import TextField from 'material-ui/TextField';

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

  renderName() {
    return (
      <div>
        <TextField
          hintText="First Name"
          errorText=""
        />
        <TextField
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
        hintText="Credit Card Number"
        errorText="The error text can be as long as you want, it will wrap."
      />
      </div>
    )
  }

  renderCreditCardInfo() {
    return (
      <div>
        <TextField
          hintText="Expiration"
          errorText=""
        />
        <TextField
          hintText="CVV"
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
      </div>
    )
  }
}

export default Form