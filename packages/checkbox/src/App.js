import React, { Component } from 'react'
import './App.css'

import { Checkbox } from './react-component-node-modules/'

class App extends Component {
  render() {
    return (
      <label>
        <Checkbox checked onChange={()=> alert('This is checkbox')} />
        Test
      </label>
    )
  }
}

export default App
