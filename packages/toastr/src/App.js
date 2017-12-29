import React, { Component } from 'react'
import './App.css'

import { Toastr, ToastrContainer } from './react-component-node-modules/'

class App extends Component {
  handleClick = evt => {
    if (!this.toastr) return
    this.toastr.trigger({children: [<div>Hello</div>, <div>World</div>]})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>trigger</button>
        <div>
          <ToastrContainer
            ref={ref => (this.toastr = ref)}
            position="top"
            duration={5000}
          >
            <Toastr toastrStyle="qts">Test</Toastr>
          </ToastrContainer>
        </div>
      </div>
    )
  }
}

export default App


