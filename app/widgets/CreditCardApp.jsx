import React from 'react'
import AppBar from 'material-ui/AppBar';
import CreditCardListWidget from './CreditCardListWidget.jsx'
import AddCreditCardWidget from './AddCreditCardWidget.jsx'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CreditCardApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false,
      creditCards: [
        {
          number: '123 2232 1232 1232',
          type: 'VISA'
        },
        {
          number: '1232 1232 1232 1231',
          type: 'AMEX'
        }
      ]
    }
  }

  getTitle() {
    if(this.state.MAIN_SCREEN) {
      return "Wallet"
    } else if(this.state.ADD_WALLET) {
      return "Add debit or credit card"
    } else if(this.state.MANAGE_CARD) {
      return "Manage your card"
    }
  }

  handleOnBack() {
    console.log(this)
    this.setState({
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false
    })
  }

  handleOnClose() {
    window.alert("Closing widget");
  }

  handleAddCreditCard() {
    this.setState({
      MAIN_SCREEN: false,
      ADD_WALLET: true,
      MANAGE_CARD: false
    })
  }

  renderBody() {
    if(this.state.MAIN_SCREEN) {
      return (
        <CreditCardListWidget
          creditCards = { this.state.creditCards }
          handleAddCreditCard = { this.handleAddCreditCard.bind(this) }
        />
      )
    } else if(this.state.ADD_WALLET) {
      return (
        <AddCreditCardWidget

        />
      )
    } else if(this.state.MANAGE_CARD) {
      return (
        <ManageCardWidget

        />
      )
    }
  }

  renderLeftIcon() {
    if(this.state.ADD_WALLET) {
      return (
        <IconButton>
          <ArrowLeft/>
        </IconButton>
      )
    }
  }


  renderAppBar() {
    const title = this.getTitle()

    return (
      <div>
        <AppBar
          title = {<span> { title } </span> }
          iconElementRight  = { <IconButton><NavigationClose /></IconButton> }
          iconElementLeft = { this.renderLeftIcon() }
          onRightIconButtonClick = { this.handleOnClose }
          onLeftIconButtonClick = { this.handleOnBack.bind(this) }
          showMenuIconButton = { this.state.MAIN_SCREEN ? false : true }
          style = {{textAlign:"center"}}
        />
        { this.renderBody() }
      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider>
        { this.renderAppBar() }
      </MuiThemeProvider>
    )
  }
}

export default CreditCardApp