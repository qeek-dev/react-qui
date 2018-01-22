import React from 'react'
import { compose, withState, defaultProps, withHandlers } from 'recompose'

const withContainer = compose(
  defaultProps({ checked: false }),
  withState('checked', 'setChecked', props => props.checked),
  withHandlers({
    handleChange: ({ setChecked }) => props => {
      if (props.disabled) return

      setChecked(checked => !checked)
    },
  }),
)

const Checkbox = ({
  checked,
  disabled,
  className,
  onChange,
  onClick,
  handleChange,
  children
}) => (
  <label>
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      onClick={onClick}
      className={className}
    />
    {children}
  </label>
)

export default withContainer(Checkbox)
