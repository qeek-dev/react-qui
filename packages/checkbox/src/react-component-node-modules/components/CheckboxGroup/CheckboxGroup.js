import React from 'react'
import styled from 'styled-components'
import Checkbox from '../Checkbox/Checkbox'

const CheckboxGroup = props => {
  const { options, span, theme, direction, checked, disabled } = props

  const children = options.map(option => {
    return (
      <Checkbox
        key={option}
        span={span}
        theme={theme}
        direction={direction}
        checked={checked}
        disabled={disabled}
      >
        {option}
      </Checkbox>
    )
  })

  const Direction = styled.div`
    display: flex;
    flex-flow: ${direction === 'column' || direction === 'col'
        ? 'column'
        : null}
      wrap;
  `

  return <Direction>{children}</Direction>
}

export default CheckboxGroup
