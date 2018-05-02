import React from 'react'
import PropTypes from 'prop-types'
import CreditCardEdit from '../components/CreditCardEdit/CreditCardEdit.jsx'


class ManageCardWidget extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CreditCardEdit
        selected = { this.props.selected }
      />
    )
  }


}

ManageCardWidget.PropTypes = {
  selected: PropTypes.object
}

export default ManageCardWidget