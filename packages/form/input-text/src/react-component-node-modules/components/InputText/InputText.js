import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem, padding } from 'polished'
import { BLACK, DARKGRAY, LIGHTGRAY } from './colors'

const Input = styled.input`
  ${padding(rem('0px'), rem('10px'), rem('0px'), rem('10px'))};
  outline: none;
  border: ${rem('1px')} solid ${DARKGRAY};
  min-height: ${rem('24px')};
  font-size: ${rem('12px')};
  color: ${BLACK};
  border: ${rem('1px')} solid ${BLACK};
  caret-color: ${BLACK};

  &::placeholder {
    color: transparent;
    background: transparent;
  }

  &:disabled {
    border: ${rem('1px')} solid ${LIGHTGRAY};
    color: ${LIGHTGRAY};
    cursor: not-allowed;
  }

  &::placeholder {
    color: #aeaeae;
  }
`

const InputText = ({
  className,
  type,
  onChange,
  placeholder,
  value,
  id,
  disabled,
  ...restProps
}) => {
  return (
    <Input
      className={className}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...restProps}
    />
  )
}

InputText.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

InputText.defaultProps = {
  value: '',
  disabled: false,
  placeholder: '',
}

export default InputText
