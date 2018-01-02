import React, { Component } from 'react'
import './App.css'

import { Toastr, QToastr } from './react-component-node-modules/'

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
          <Toastr
            ref={ref => (this.toastr = ref)}
            position="bottom"
            duration={5000}
          >
            <QToastr toastrStyle="qts">Test</QToastr>
          </Toastr>
        </div>
      </div>
    )
  }
}

export default App


