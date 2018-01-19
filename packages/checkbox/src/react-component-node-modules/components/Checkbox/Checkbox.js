import React from 'react'
import { compose, withState, defaultProps } from 'recompose'

const container = compose(
  defaultProps({ checked: false }),
  withState({ checked: false }),
)

const Checkbox = props => (
  <div>
    <input type="checkbox" />
  </div>
)

export default Checkbox
