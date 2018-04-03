import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import noop from 'lodash/fp/noop'
import btn_checkbox_presseddisable from './assets/checkbox_light_transparent/btn_checkbox_presseddisable.svg'
import btn_checkbox_disable from './assets/checkbox_light_transparent/btn_checkbox_disable.svg'
import btn_checkbox_pressed from './assets/checkbox_light_transparent/btn_checkbox_pressed.svg'
import btn_checkbox from './assets/checkbox_light_transparent/btn_checkbox.svg'
import btn_checkbox_presseddisable_black from './assets/checkbox_dark/btn_checkbox_presseddisable_black.svg'
import btn_checkbox_disable_black from './assets/checkbox_dark/btn_checkbox_disable_black.svg'
import btn_checkbox_pressed_black from './assets/checkbox_dark/btn_checkbox_pressed_black.svg'
import btn_checkbox_black from './assets/checkbox_dark/btn_checkbox_black.svg'
import { BLACK, WHITE, LIGHTGRAY } from './colors'
import { rem } from 'polished'

const Label = styled.label`
  color: ${props =>
    props.theme === 'light'
      ? props.disabled ? LIGHTGRAY : BLACK
      : props.disabled ? LIGHTGRAY : WHITE};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: 0;
`

const Img = styled.img`
  margin-right: ${rem('10px')};
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

const Checkbox = ({
  id,
  name,
  checked,
  disabled,
  className,
  onChange = noop,
  onClick = noop,
  children,
  span,
  theme,
  value,
  ...restProps
}) => {
  const checkBoxState = {
    light: {
      0: btn_checkbox, // no checked, no disabled
      1: btn_checkbox_disable, // no checked, disabled
      2: btn_checkbox_pressed, // checked, no disabled
      3: btn_checkbox_presseddisable, // checked, disabled
    },
    dark: {
      0: btn_checkbox_black, // no checked, no disabled
      1: btn_checkbox_disable_black, // no checked, disabled
      2: btn_checkbox_pressed_black, // checked, no disabled
      3: btn_checkbox_presseddisable_black, // checked, disabled
    },
  }

  const checkBoxAltState = {
    light: {
      0: 'btn_checkbox', // no checked, no disabled
      1: 'btn_checkbox_disable', // no checked, disabled
      2: 'btn_checkbox_pressed', // checked, no disabled
      3: 'btn_checkbox_presseddisable', // checked, disabled
    },
    dark: {
      0: 'btn_checkbox_black', // no checked, no disabled
      1: 'btn_checkbox_disable_black', // no checked, disabled
      2: 'btn_checkbox_pressed_black', // checked, no disabled
      3: 'btn_checkbox_presseddisable_black', // checked, disabled
    },
  }

  const getCheckboxStatus = (checked, disabled) =>
    parseInt(checked << 1, 10) + parseInt(disabled, 10)

  const getCheckboxAltStatus = (checked, disabled) =>
    parseInt(checked << 1, 10) + parseInt(disabled, 10)

  return (
    <Label className={className} theme={theme} disabled={disabled} span={span}>
      <Img
        src={
          checkBoxState[theme][
            getCheckboxStatus(
              checked === true ? 1 : 0,
              disabled === true ? 1 : 0,
            )
          ]
        }
        alt={
          checkBoxAltState[theme][
            getCheckboxAltStatus(
              checked === true ? 1 : 0,
              disabled === true ? 1 : 0,
            )
          ]
        }
        theme={theme}
        disabled={disabled}
        checked={checked}
      />
      <Input
        id={id}
        name={name}
        Checked={checked}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        value={value}
        {...restProps}
      />
      <Span>{children}</Span>
    </Label>
  )
}

Checkbox.propTypes = {
  /** Checkbox id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Checkbox name */
  name: PropTypes.string,
  /** Checkbox checked or not */
  checked: PropTypes.bool,
  /** Checkbox disabled or not */
  disabled: PropTypes.bool,
  /** The margin pixels between Checkboxes  */
  span: PropTypes.number,
  /** The theme of Checkbox */
  theme: PropTypes.string,
  /** Content of the checkbox. Can be a string, number, array or a react component.  */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.array,
  ]),
  /** Add addition className for Checkbox element */
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  theme: 'light',
}

export default Checkbox
