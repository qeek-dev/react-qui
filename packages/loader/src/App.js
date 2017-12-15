import React, { Component } from 'react'
import logo from './logo.svg'
import 'normalize.css'
import './App.css'

import { Loader, QLoader } from './react-component-node-modules/'

class App extends Component {
  phases = [
    {
      render: () => <div>loading...</div>,
      duration: 3,
    },
    {
      render: () => <div>still loading...</div>,
      duration: 5,
    },
  ]

  qloaderOps = {
    visible: true,
    cancelable: true,
    showProgress: true,
    showCounter: true,
    cancelButtonWord: '取消動作',
    descriptionPhase1: '讀取中...',
    detailPhase1:
      '詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
    descriptionPhase2: '正在努力讀取中，請您再稍後一下...',
    detailPhase2:
      '更加詳細的描述資訊aVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWordddaVeryLongWorddd',
    remainMessage: '剩餘時間',
    remainTime: '00:03:59',
    onTimeout: () => console.log('timeout!'),
    renderTimeout: () => <div>Timeout!!!</div>,
  }

  state = {
    percent: 0,
  }

  componentDidMount() {
    this.timer = window.setInterval(
      () =>
        this.setState(prevState => ({
          percent: prevState.percent + 1,
        })),
      1000
    )
  }

  componentWillUnmount() {
    if(this.timer) window.clearInterval(this.timer)
  }

  renderTimeout = () => <div>timeout!!!</div>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Component Demo Page</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="content">
          <Loader
            phases={this.phases}
            renderTimeout={this.renderTimeout}
            timeout={10000}
            visible
          />
        </div>
        <QLoader percent={this.state.percent} {...this.qloaderOps} />
      </div>
    )
  }
}

export default App
