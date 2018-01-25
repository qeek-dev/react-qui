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
  cursor: ${props => (props.disabled ? 'not-allowed': 'pointer')};
`
const Img = styled.img`
  margin-right: 10px;
  vertical-align: middle;
`

const Input = styled.input`
  display: none;
`

const Span = styled.span`
  color: ${props => (props.disabled ? '#aeaeae' : null)};
  margin-right: ${props => props.span}px;
`

const withContainer = compose(
  defaultProps({ checked: false, disabled: false, theme: 'light' }),
  mapProps(props => ({
    onChange: props.onChange,
    children: props.children,
    disabled: props.disabled,
    checked: props.checked,
    className: props.className,
    span: props.span,
    theme: props.theme,
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
  span,
  theme,
}) => {
  return (
    <Label htmlFor={children} disabled={disabled}>
      <Img
        src={
          theme === 'light'
            ? disabled
              ? checked
                ? checkboxIcons.svg.btn_checkbox_presseddisable
                : checkboxIcons.svg.btn_checkbox_disable
              : checked
                ? checkboxIcons.svg.btn_checkbox_pressed
                : checkboxIcons.svg.btn_checkbox
            : disabled
              ? checked
                ? checkboxIcons.svg.btn_checkbox_presseddisable_black
                : checkboxIcons.svg.btn_checkbox_disable_black
              : checked
                ? checkboxIcons.svg.btn_checkbox_pressed_black
                : checkboxIcons.svg.btn_checkbox_black
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
      <Span disabled={disabled} span={span}>
        {children}
      </Span>
    </Label>
  )
}

export default withContainer(Checkbox)
