import React from 'react'
import TextField from 'material-ui/TextField';
import Payment from 'payment';
import RaisedButton from 'material-ui/RaisedButton';
import CreditCard from 'credit-card'
import creditCardType from 'credit-card-type'

class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: {},
      firstName: "",
      lastName: "",
      number: "",
      expiration: "",
      cvv: "",
      type: "",
      cardName: ""
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
    const type = this.state.type

    let card = {
      cardType: type,
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

    // if(this.state.isValid) {
      let creditCard = {
        userId: this.props.userId,
        encryption: "",
        type: this.state.type,
        number: this.state.number,
        cvv: this.state.cvv,
        expiration: this.state.expiration,
        name: `${this.state.firstName} ${this.state.lastName}`,
        cardName: this.state.cardName
      }
      this.addCreditCard(creditCard, this.props.handleAddNewCreditCard)
    // }

  }

  addCreditCard(creditCard, onFinish) {
    fetch('http://localhost:8082/creditCards/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creditCard)
      })
      .then(response => response.json())
      .then(data => {
        onFinish(data.success)
      }).catch(err => {
        onFinish(err.error)
      })
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
        onChange = {(e, newValue) => { 
          this.setState({
            number: newValue,
            type:  creditCardType(newValue)[0] ? creditCardType(newValue)[0].type.toUpperCase() : ""
          })}}
      />
      </div>
    )
  }

  renderCreditCardInfo() {
    return (
      <div>
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
        <br/>
        <div>
          <TextField
            name = "cardName"
            hintText="Card Name"
            errorText= { this.state.error && this.state.error.expirationDate ? this.state.error.expirationDate : ""}
            onChange = {(e, newValue) => { this.setState({cardName: newValue})}}
          />
        </div>
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

export default AddForm