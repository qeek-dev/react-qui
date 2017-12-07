import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Loader } from './react-component-node-modules/';

class App extends Component {
  phases = [
    {
      render: () => <div>loading...</div>,
      duration: 3
    },
    {
      render: () => <div>still loading...</div>,
      duration: 5
    }
  ]

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
          <Loader phases={this.phases} visible />
        </div>
      </div>
    );
  }
}

export default App;
