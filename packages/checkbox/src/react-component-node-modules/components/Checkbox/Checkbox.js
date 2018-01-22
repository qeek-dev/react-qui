import React from 'react'
import { compose, withState, defaultProps, withHandlers } from 'recompose'
import styled from 'styled-components'
import { importAllFiles } from './utils/utils'

const checkboxIcons = importAllFiles(
  require.context('./assets/', true, /\.(png|jpe?g|svg)$/),
)

console.log(checkboxIcons)

const Input = styled.input`
  margin-right: 10px;
  vertical-align: middle;
  outline: none;
`

const Span = styled.span`
  vertical-align: middle;
  color: ${props => (props.disabled ? '#aeaeae' : null)};
`

const withContainer = compose(
  defaultProps({ checked: false, value: false }),
  withState('checked', 'setChecked', props => props.checked),
  withHandlers({
    handleClick: ({ setChecked }) => props => {
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
  handleClick,
  children,
}) => (
  <label>
    <Input
      type="image"
      src={
        disabled
          ? checked
            ? checkboxIcons.svg.btn_checkbox_presseddisable
            : checkboxIcons.svg.btn_checkbox_disable
          : checked
            ? checkboxIcons.svg.btn_checkbox_pressed
            : checkboxIcons.svg.btn_checkbox
      }
      alt="Src Error"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      onClick={handleClick}
      className={className}
      value="true"
    />
    <Span disabled={disabled}>{children}</Span>
  </label>
)

export default withContainer(Checkbox)
