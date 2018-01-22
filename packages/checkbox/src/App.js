import React, { Component } from 'react'
import './App.css'

import { Checkbox } from './react-component-node-modules/'

class App extends Component {


  render() {
    return (
      <Checkbox onChange={()=>alert('hello')}>
        Test
      </Checkbox>
    )
  }
}

export default App
