import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Payment from 'payment';
import RaisedButton from 'material-ui/RaisedButton';

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.selected.number,
      firstName: this.props.selected.name.split(" ")[0], 
      lastName: this.props.selected.name.split(" ")[1],
      expiration: this.props.selected.expiration,
      cvv: this.props.selected.cvv,
      cardName: this.props.selected.cardName
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

  onFinish(message) {
    this.props.handleDeleteCreditCard(message)
  }

  handleOnDelete(onFinish) {
    let creditCard = {
      userId: this.props.userId,
      number: this.state.number
    }
    fetch('http://localhost:8082/creditCards/', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creditCard)
    })
    .then(response => response.json())
    .then(data => {
      this.onFinish(data.success)
    })
    .catch(err => {
      this.onFinish(err.error)
    })
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
        defaultValue = { this.state.number }
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
        <br/>
        <div>
          <TextField
            name = "cardName"
            hintText="Card Name"
            errorText=  ""
            defaultValue = {this.state.cardName}
          />
        </div>
      </div>
    )
  }

  
  render() {
    const style = {
      margin: 12,
    };
    return(
      <div>
        {this.renderName()}
        <br />
        { this.renderCreditCardNumber() }
        <br />
        { this.renderCreditCardInfo() }
        <br/>
        <RaisedButton label="Update" primary={true} style={style}/>
        <RaisedButton label="Delete" primary={true} style={style} onClick={this.handleOnDelete.bind(this)}/>
      </div>
    )
  }
}

EditForm.PropTypes = {
  selected: PropTypes.object,
  handleDeleteCreditCard: PropTypes.func
}

export default EditForm