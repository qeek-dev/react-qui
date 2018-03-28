import React from 'react'
import './App.css'

import { InputText } from './react-component-node-modules/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <InputText
          titleMaxWidth={200}
          value={this.state.value}
          onChange={this.handleChange}
        >
          Title
        </InputText>
      </div>
    )
  }
}

export default App
