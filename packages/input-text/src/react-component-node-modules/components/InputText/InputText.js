import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '123',
})`
  outline: none;
  border: 1px solid #848484;
  padding: 0px;
  height: 24px;
  padding: 0 10px;
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

const InputText = ({ className, onChange, onClick, children }) => {
  return (
    <div>
      <Title titleMaxWidth={200}>
        <Label htmlFor={children} titleSpanL={0} titleSpanR={150}>
          Test
        </Label>
      </Title>
      <Input id={children} onChange={onChange} className={className} />
    </div>
  )
}

InputText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  titleSpanR: PropTypes.number,
  titleSpanL: PropTypes.number,
  titleMaxWidth: PropTypes.number
}

InputText.defaultProps = {
  value: '',
  disabled: false,
  titleSpanR: 10,
  titleSpanL: 0,
}

export default InputText
