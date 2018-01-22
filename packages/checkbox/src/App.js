import React, { Component } from 'react'
import './App.css'

import { Checkbox } from './react-component-node-modules/'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Checkbox onChange={() => alert('hello')}>Test normal</Checkbox>
        </div>
        <div>
          <Checkbox disabled onChange={() => alert('hello')}>
            Test disabled
          </Checkbox>
        </div>
        <div>
          <Checkbox checked onChange={() => alert('hello')}>
            Test checked
          </Checkbox>
        </div>
        <div>
          <Checkbox checked disabled onChange={() => alert('hello')}>
            Test checked disabled
          </Checkbox>
        </div>
      </div>
    )
  }
}

export default App
