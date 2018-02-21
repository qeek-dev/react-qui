import React from 'react'
import PropTypes from 'prop-types'
import { compose, withStateHandlers } from 'recompose'
import styled from 'styled-components'
import btn_checkbox_presseddisable from './assets/checkbox_light_transparent/btn_checkbox_presseddisable.svg'
import btn_checkbox_disable from './assets/checkbox_light_transparent/btn_checkbox_disable.svg'
import btn_checkbox_pressed from './assets/checkbox_light_transparent/btn_checkbox_pressed.svg'
import btn_checkbox from './assets/checkbox_light_transparent/btn_checkbox.svg'
import btn_checkbox_presseddisable_black from './assets/checkbox_dark/btn_checkbox_presseddisable_black.svg'
import btn_checkbox_disable_black from './assets/checkbox_dark/btn_checkbox_disable_black.svg'
import btn_checkbox_pressed_black from './assets/checkbox_dark/btn_checkbox_pressed_black.svg'
import btn_checkbox_black from './assets/checkbox_dark/btn_checkbox_black.svg'

const Label = styled.label`
  color: ${props =>
    props.theme === 'light'
      ? props.disabled ? '#aeaeae' : null
      : props.disabled ? '#aeaeae' : '#ffffff'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: ${props =>
    props.direction === 'column' || props.direction === 'col'
      ? props.span
      : null}px;
  margin-right: ${props => (props.direction === 'row' ? props.span : null)}px;
  line-height: 0px;
`

const Img = styled.img.attrs({
  src: ({ theme, disabled, checked }) =>
    theme === 'light'
      ? disabled
        ? checked ? btn_checkbox_presseddisable : btn_checkbox_disable
        : checked ? btn_checkbox_pressed : btn_checkbox
      : disabled
        ? checked
          ? btn_checkbox_presseddisable_black
          : btn_checkbox_disable_black
        : checked ? btn_checkbox_pressed_black : btn_checkbox_black,
  alt: ({ theme, disabled, checked }) =>
    theme === 'light'
      ? disabled
        ? checked ? 'btn_checkbox_presseddisable' : 'btn_checkbox_disable'
        : checked ? 'btn_checkbox_pressed' : 'btn_checkbox'
      : disabled
        ? checked
          ? 'btn_checkbox_presseddisable_black'
          : 'btn_checkbox_disable_black'
        : checked ? 'btn_checkbox_pressed_black' : 'btn_checkbox_black',
})`
  margin-right: 10px;
  vertical-align: middle;
`

const Span = styled.span`
  display: inline-block;
  vertical-align: middle;
`

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`

const enhancer = compose(
  withStateHandlers(
    props => ({
      checked: props.checked,
    }),
    {
      handleClick: ({ checked, disabled }) => event => {
        if (disabled) return

        return { checked: !checked }
      },
    },
  ),
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
      theme={theme}
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
      <Span>{children}</Span>
    </Label>
  )
}

Checkbox.propTypes = {
  /** Checkbox checked or not */
  checked: PropTypes.bool,
  /** Checkbox disabled or not */
  disabled: PropTypes.bool,
  /** Handle the function after triggering click event */
  handleClick: PropTypes.func,
  /** Content of the checkbox. Can be a string, number, array or a react component.  */
  /** The margin pixels between Checkboxes  */
  span: PropTypes.number,
  /** The theme of Checkbox */
  theme: PropTypes.string,
  /** The driection of Checkboxes. Can be Row or Column */
  direction: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.array,
  ]),
  /** Add addition className for Checkbox element */
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  theme: 'light',
}

export default enhancer(Checkbox)
