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

const Label = styled.label`
  color: ${props => (props.disabled ? '#aeaeae' : null)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: ${props =>
    props.direction === 'column' || props.direction === 'col'
      ? props.span
      : null}px;
  margin-right: ${props => (props.direction === 'row' ? props.span : null)}px;
`

const Img = styled.img.attrs({
  src: ({ theme, disabled, checked }) =>
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
          : checkboxIcons.svg.btn_checkbox_black,
  alt: 'Src Error',
})`
  margin-right: 10px;
  vertical-align: middle;
`

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
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
    direction: props.direction,
  })),
  withState('checked', 'setChecked', props => props.checked),
  withHandlers({
    handleClick: ({ setChecked, disabled }) => props => {
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
  direction,
}) => {
  return (
    <Label
      htmlFor={children}
      disabled={disabled}
      span={span}
      direction={direction}
    >
      <Img theme={theme} disabled={disabled} checked={checked} />
      <Input
        id={children}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
        onClick={handleClick}
        className={className}
      />
      <span>{children}</span>
    </Label>
  )
}

export default withContainer(Checkbox)
