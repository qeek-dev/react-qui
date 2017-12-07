import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from './react-component-node-modules/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="light" shape="rounded" text="button-test" />
      </div>
    );
  }
}

export default App;
