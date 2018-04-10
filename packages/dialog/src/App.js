import React, { Component } from 'react'

import { TextDialog, PopupDialog } from './react-component-node-modules/'

const Fragment = React.Fragment

class App extends Component {
  render() {
    const style = { margin: '10px' }
    return (
      <Fragment>
        <TextDialog
          style={style}  
          visible
          confirmText="Yes"
          cancelText="No"
          onClose={() => alert('close')}
          onConfirm={() => alert('confirm')}
          onCancel={() => alert('cancel')}
        >
          <p>
            VeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongText
          </p>
        </TextDialog>
        <PopupDialog style={style} visible level="info" confirmText="OK" />
        <PopupDialog style={style} visible level="warning" confirmText="OK" />
        <PopupDialog style={style} visible level="error" confirmText="OK" />
        <PopupDialog style={style} visible level="charging" confirmText="OK" />
        <PopupDialog style={style} visible level="ok" confirmText="OK" />
        <PopupDialog style={style} visible level="remind" confirmText="OK" />
        <PopupDialog style={style} visible level="delete" confirmText="OK" />
        <PopupDialog style={style} visible level="help" confirmText="OK" />
        <PopupDialog
          style={style}
          visible
          level="Error_but_system_still_can_process"
          confirmText="OK"
        />
      </Fragment>
    )
  }
}

export default App
