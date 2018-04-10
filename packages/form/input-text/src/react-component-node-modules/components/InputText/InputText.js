import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem, padding } from 'polished'
import { BLACK, DARKGRAY, LIGHTGRAY } from './colors'

const Input = styled.input`
  ${padding(rem('0px'), rem('10px'), rem('0px'), rem('10px'))};
  box-sizing: border-box;
  outline: none;
  border: ${rem('1px')} solid ${DARKGRAY};
  min-height: ${rem('24px')};
  height: ${props => (props.height ? rem(`${props.height}px`) : rem('24px'))};
  width: ${props => (props.width ? rem(`${props.width}px`) : rem('150px'))};
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

const noop = () => {}

const InputText = ({
  className,
  type,
  onChange = noop,
  placeholder,
  value,
  id,
  disabled,
  height,
  width,
  ...restProps
}) => {
  console.log(height)
  return (
    <Input
      className={className}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      height={height}
      width={width}
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
  height: PropTypes.number,
  width: PropTypes.number,
}

InputText.defaultProps = {
  value: '',
  disabled: false,
  placeholder: '',
}

export default InputText
