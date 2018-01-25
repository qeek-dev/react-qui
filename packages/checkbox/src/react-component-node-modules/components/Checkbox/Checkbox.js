import React from 'react'
import {
  compose,
  withState,
  defaultProps,
  withHandlers,
  mapProps,
} from 'recompose'
import styled from 'styled-components'
import { importAllFiles } from './utils/utils'

const checkboxIcons = importAllFiles(
  require.context('./assets/', true, /\.(png|jpe?g|svg)$/),
)

// console.log(checkboxIcons)

const Label = styled.label`
  display: inline-block;
`
const Img = styled.img`
  margin-right: 10px;
  vertical-align: middle;
`

const Input = styled.input`
  display: none;
`

const Span = styled.span`
  color: ${props => (props.disabled ? '#aeaeae' : null)}
`  

const withContainer = compose(
  defaultProps({ checked: false, disabled: false }),
  mapProps(props => ({
    onChange: props.onChange,
    children: props.children,
    disabled: props.disabled,
    checked: props.checked,
    className: props.className,
  })),
  withState('checked', 'setChecked', props => props.checked),
  withHandlers({
    handleClick: ({ setChecked, children, onChange, disabled }) => props => {
      if (disabled) return

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
}) => {
  console.log(`checked: ${checked}, disabled: ${disabled}`)
  return (
    <Label htmlFor={children}>
      <Img
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
      />
      <Input
        type="checkbox"
        id={children}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
        onClick={handleClick}
        className={className}
      />
      <Span disabled={disabled}>{children}</Span>
    </Label>
  )
}

export default withContainer(Checkbox)
