import React from 'react'
import styled from 'styled-components'
import Checkbox from '../Checkbox/Checkbox'

const CheckboxGroup = props => {
  const { options, span, theme, direction} = props

  const children = options.map(option => {
    console.log(`option: ${option}`)

    return (
      <Checkbox key={option} span={span} theme={theme} direction={direction}>
        {option}
      </Checkbox>
    )
  })

  const Direction = styled.div`
    display: flex;
    flex-flow: ${direction} wrap;
  `

  return <Direction>{children}</Direction>
}

export default CheckboxGroup
