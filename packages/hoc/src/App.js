import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import withDraggable from './react-component-node-modules/hoc/withDraggable';

const Demo = withDraggable({
  position: 'absolute',
  zIndex: '9999',
  center: true
})(props => (
  <div
    style={{
      background: 'tomato',
      width: '300px',
      height: '50px',
      lineHeight: '50px'
    }}
    data-props={props}
  >
    I can be dragged.
  </div>
));

class App extends Component {
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
        <Demo demoProps="demo" />
      </div>
    );
  }
}

export default App;
