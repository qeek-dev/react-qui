import React from 'react'
import {
  compose,
  withState,
  defaultProps,
  withHandlers,
  mapProps,
  lifecycle,
} from 'recompose'
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
  mapProps(props => ({
    onChange: props.onChange,
    children: props.children,
    disabled: props.disabled,
    value: props.value,
  })),
  withState('checked', 'setChecked', props => props.checked),
  withState('value', 'setValue', props => props.value),
  withHandlers({
    handleClick: ({
      setChecked,
      setValue,
      children,
      onChange,
      disabled,
    }) => props => {
      if (disabled) return

      setChecked(checked => !checked)
      setValue(value => !value)
    },
  }),
  lifecycle({
    shouldComponentUpdate(nextProps, nextState) {
      console.log(`shouldComponentUpdate`)
      return true
    },
    componentWillUpdate(nextProps, nextState) {
      console.log(`componentWillUpdate`)
    },
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.value !== this.props.value) {
        prevProps.onChange()
      }
      console.log(`componentDidupdate`)
    },
  }),
)

const Checkbox = ({
  checked,
  disabled,
  value,
  className,
  onChange,
  onClick,
  handleClick,
  children,
}) => {
  console.log(`disable: ${disabled}`)
  return (
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
      defaultValue={checked}
    />
    <Span disabled={disabled}>{children}</Span>
  </label>
)}

export default withContainer(Checkbox)
