import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input.attrs({
  type: 'text',
})`
  outline: none;
  border: 1px solid #848484;
  padding: 0px;
  min-height: 24px;
  padding: 0px 0px 0px 10px;
  &:focus {
    font-size: 12px;
    color: #000000;
    border: 1px solid #000000;
    caret-color: #000000;

    &::placeholder {
      color: transparent;
      background: transparent;
    }
  }

  &:disabled {
    border: 1px solid #aeaeae;
    color: #aeaeae;
    cursor: not-allowed;
  }

  &::placeholder {
    padding: 0px;
    margin: 0px;
    color: #aeaeae;
  }
`

const Label = styled.label`
  margin-left: ${props => props.titleSpanL}px;
  margin-right: ${props => props.titleSpanR}px;
  &:after {
    content: ' :';
  }
`

const Title = styled.div`
  display: inline-block;
  max-width: ${props => props.titleMaxWidth}px;
`

const InputText = ({
  className,
  onChange,
  onClick,
  children,
  placeholder,
  value,
  disabled,
  titleSpanR,
  titleSpanL,
  titleMaxWidth,
  ...restProps
}) => {
  return (
    <div>
      <Title titleMaxWidth={titleMaxWidth}>
        <Label
          htmlFor={children}
          titleSpanL={titleSpanL}
          titleSpanR={titleSpanR}
        >
          {children}
        </Label>
      </Title>
      <Input
        id={children}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
        {...restProps}
      />
    </div>
  )
}

InputText.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  titleSpanR: PropTypes.number,
  titleSpanL: PropTypes.number,
  titleMaxWidth: PropTypes.number,
}

InputText.defaultProps = {
  value: '',
  disabled: false,
  titleSpanR: 10,
  titleSpanL: 0,
}

export default InputText
