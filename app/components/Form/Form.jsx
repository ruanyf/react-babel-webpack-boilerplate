import React from 'react'
import TextField from 'material-ui/TextField';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    return(
      <div>
        <TextField
        hintText="Hint Text"
        /><br />
      </div>
    )
  }
}

export default Form