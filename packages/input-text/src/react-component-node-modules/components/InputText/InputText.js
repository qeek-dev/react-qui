import React from 'react'
import styled from 'styled-components'

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
  &:after {
    content: ' : ';
  }
`
const InputText = ({ className, onChange, onClick, children}) => {
  return (
    <div>
      <Label htmlFor={children}>Test</Label>
      <Input id={children} onChange={onChange} className={className}/>
    </div>
  )
}

export default InputText
