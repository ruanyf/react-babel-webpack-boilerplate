import React from 'react'
import AppBar from 'material-ui/AppBar';
import CreditCardListWidget from './CreditCardListWidget.jsx'
import AddCreditCardWidget from './AddCreditCardWidget.jsx'
import ManageCardWidget from './ManageCardWidget.jsx'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class VirtualWalletApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false,
      creditCards: [],
      selected: {},
      userId: "123123123132",
      snackBar: {
        open: false,
        message: ""
      }
    }
  }

  getTitle() {
    if(this.state.MAIN_SCREEN) {
      return "Wallet"
    } else if(this.state.ADD_WALLET) {
      return "Add debit or credit card"
    } else if(this.state.MANAGE_CARD) {
      return `Manage ${this.state.selected.cardName}`
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

  handleAddNewCreditCard(message) {
    this.setState({
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false,
      snackBar: {
        open: true,
        message
      }
    })
  }

  handleAddCreditCard() {
    this.setState({
      MAIN_SCREEN: false,
      ADD_WALLET: true,
      MANAGE_CARD: false
    })
  }

  handleDeleteCreditCard(message) {
    this.setState({
      MAIN_SCREEN: true,
      ADD_WALLET: false,
      MANAGE_CARD: false,
      selected: {},
      snackBar: {
        open: true,
        message
      }
    })
  }

  renderBody() {
    if(this.state.MAIN_SCREEN) {
      return (
        <CreditCardListWidget
          userId = { this.state.userId }
          handleAddCreditCard = { this.handleAddCreditCard.bind(this) }
          handleOnListItemClick = { this.handleOnListClick.bind(this)}
        />
      )
    } else if(this.state.ADD_WALLET) { 
      return (
        <AddCreditCardWidget
          userId = { this.state.userId }
          handleAddNewCreditCard = { this.handleAddNewCreditCard.bind(this)}
        />
      )
    } else if(this.state.MANAGE_CARD) {
      return (
        <ManageCardWidget
          userId = { this.state.userId }
          selected = { this.state.selected }
          handleDeleteCreditCard = { this.handleDeleteCreditCard.bind(this) }
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

  renderSnackBar() {
    return (
      <Snackbar
        open={this.state.snackBar.open}
        message={this.state.snackBar.message}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    )
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
          
        </div>
    )
  }

  renderApp() {
    return (
      <div>
        { this.renderAppBar() }
        { this.renderBody() }
        { this.renderSnackBar() }
      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.renderApp() }
      </MuiThemeProvider>
    )
  }
}

export default VirtualWalletApp