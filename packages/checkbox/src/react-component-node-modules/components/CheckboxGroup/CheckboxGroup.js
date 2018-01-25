import React from 'react'
import styled from 'styled-components'
import Checkbox from '../Checkbox/Checkbox'

const CheckboxGroup = props => {
  const { options, span, theme } = props

  const children = options.map(option => {
    console.log(`option: ${option}`)

    return (
      <Checkbox key={option} span={span} theme={theme}>
        {option}
      </Checkbox>
    )
  })

  return <div>{children}</div>
}

export default CheckboxGroup
