import React, { Component } from 'react'
import './App.css'

import { Toastr, QToastr } from './react-component-node-modules/'

class App extends Component {
  handleClick = evt => {
    if (!this.toastr) return
    this.toastr.trigger({children: '已複製到剪貼簿。'})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>trigger</button>
        <div>
          <Toastr
            ref={ref => (this.toastr = ref)}
            position="top"
            duration={100000}
            zIndex={9999}
          >
            <QToastr toastrStyle="qts">Test</QToastr>
          </Toastr>
        </div>
      </div>
    )
  }
}

export default App


