import React from 'react'
import AppBar from 'material-ui/AppBar';
import CreditCardListWidget from './CreditCardListWidget.jsx'
import AddCreditCardWidget from './AddCreditCardWidget.jsx'
import ManageCardWidget from './ManageCardWidget.jsx'
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
      creditCards: [],
      selected: {},
      userId: "123123123132"
    }
    this.getCreditCards()
  }

  getCreditCards() {
    fetch('http://localhost:8082/creditCards/1232323223232')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        creditCards: data.creditCards[0] ? data.creditCards[0].cards : ""
      })
    })
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
    this.setState({
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false
    })
  }

  handleOnListClick(event, data) {
    this.setState({
      MAIN_SCREEN: false,
      ADD_WALLET: false,
      MANAGE_CARD: true,
      selected: data
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
          handleOnListItemClick = { this.handleOnListClick.bind(this)}
        />
      )
    } else if(this.state.ADD_WALLET) { 
      return (
        <AddCreditCardWidget
          userId = { this.state.userId }
        />
      )
    } else if(this.state.MANAGE_CARD) {
      return (
        <ManageCardWidget
          selected = { this.state.selected }
        />
      )
    }
  }

  renderLeftIcon() {
    if(this.state.ADD_WALLET || this.state.MANAGE_CARD) {
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