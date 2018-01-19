import React, { Component } from 'react';
import './App.css';

import { Checkbox } from './react-component-node-modules/';

function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

class App extends Component {
  render() {
    return (
      <div>
        <Checkbox checked onChange={onChange} />
      </div>
    );
  }
}

export default App;
