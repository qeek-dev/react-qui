import React, { Component } from 'react'

import { TextDialog, PopupDialog } from './react-component-node-modules/'

const Fragment = React.Fragment

class App extends Component {
  render() {
    return (
      <Fragment>
        <TextDialog visible onClose={() => alert('close dialog')}>
          Hi, some content!
        </TextDialog>
        <PopupDialog style={{margin: '20px'}} visible level="info" confirmText="OK" />
        <PopupDialog visible level="warning" confirmText="OK" />
      </Fragment>
    )
  }
}

export default App
