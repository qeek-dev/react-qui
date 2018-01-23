import React, { Component } from 'react'
import './App.css'

import { Checkbox } from './react-component-node-modules/'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Checkbox onChange={() => alert('hello')}>normal</Checkbox>
        </div>
        <div>
          <Checkbox disabled onChange={() => console.log('hello')}>
            disabled
          </Checkbox>
        </div>
        <div>
          <Checkbox checked onChange={() => alert('hello')}>
            checked
          </Checkbox>
        </div>
        <div>
          <Checkbox checked disabled onChange={() => console.log('hello')}>
            checked disabled
          </Checkbox>
        </div>
      </div>
    )
  }
}

export default App
