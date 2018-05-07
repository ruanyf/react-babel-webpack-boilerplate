import React from 'react'
import TextField from 'material-ui/TextField';
import Payment from 'payment';
import RaisedButton from 'material-ui/RaisedButton';
import CreditCard from 'credit-card'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: {},
      firstName: "",
      lastName: "",
      number: "",
      expiration: "",
      cvv: ""
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

  handleOnAdd() {
    const firstName = this.state.firstName 
    const lastName = this.state.lastName
    const number = this.state.number
    const expiration = this.state.expiration
    const cvv = this.state.cvv
    const type = "visa"

    console.log(firstName, lastName, number, expiration, cvv)
    let card = {
      cardType: '',
      number: number.replace(/\s/g, ""),
      expiryMonth: expiration.replace(/\s/g, "").split("/")[0],
      expiryYear: expiration.replace(/\s/g, "").split("/")[1],
      cvv
    }
    var validation = CreditCard.validate(card)
    if(!validation.validCardNumber) {
      this.setState({
        isValid: false,
        error: {
          number: "Invalid credit card number"
        }
      })
    }

    if(!validation.validExpiryMonth || !validation.validExpiryYear || validation.isExpired) {
      this.setState({
        isValid: false,
        error: {
          expirationDate: "Invalid expiration date"
        }
      })
    }

    if(!validation.validCVV) {
      this.setState({
        isValid: false,
        error: {
          cvv: "Invalid CVV"
        }
      })
    }

    if(this.state.isValid) {
      fetch()
    }

  }

  renderName() {
    return (
      <div>
        <TextField
          name = "first_name"
          hintText="First Name"
          onChange = {(e, newValue) => { 
            this.setState({firstName: newValue})}}
        />
        <TextField
          name = "last_name"
          hintText="Last Name"
          onChange = {(e, newValue) => { this.setState({lastName: newValue})}}
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
        errorText= { this.state.error && this.state.error.number ? this.state.error.number : ""}
        onChange = {(e, newValue) => { this.setState({number: newValue})}}
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
          errorText= { this.state.error && this.state.error.expirationDate ? this.state.error.expirationDate : ""}
          onChange = {(e, newValue) => { this.setState({expiration: newValue})}}
        />
        <TextField
          name = "cvc"
          hintText="CVC"
          errorText= { this.state.error && this.state.error.cvv ? this.state.error.cvv : ""}
          onChange = {(e, newValue) => { this.setState({cvv: newValue})}}
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
        <RaisedButton label="Add" primary={true} onClick={this.handleOnAdd.bind(this)}/>
      </div>
    )
  }
}

export default Form