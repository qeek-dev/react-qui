import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Toastr, ToastrContainer } from './react-component-node-modules/'
import { TodoList } from './react-component-node-modules/'

class App extends Component {
  handleClick = evt => {
    if (!this.toastr) return
    this.toastr.trigger()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>trigger</button>
        <div>
          <ToastrContainer
            ref={ref => (this.toastr = ref)}
            position="top-right"
            duration={2}
          >
            <Toastr btnStyle="qts">已複製到剪貼簿。</Toastr>
          </ToastrContainer>
        </div>
      </div>
    )
  }
}

export default App


