import React from 'react'
import styled from 'styled-components'
import Checkbox from '../Checkbox/Checkbox'
import PropTypes from 'prop-types'

const CheckboxGroup = props => {
  const {
    options,
    span,
    theme,
    direction,
    checked,
    disabled,
    className,
  } = props

  const children = options.map(option => {
    return (
      <Checkbox
        key={option}
        span={span}
        theme={theme}
        direction={direction}
        checked={checked}
        disabled={disabled}
        className={className}
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

CheckboxGroup.propTypes = {
  /** Checkbox checked or not */
  checked: PropTypes.bool,
  /** Checkbox disabled or not */
  disabled: PropTypes.bool,
  /** The margin pixels between Checkboxes  */
  span: PropTypes.number,
  /** The theme of Checkbox */
  theme: PropTypes.string,
  /** The driection of Checkboxes. Can be Row or Column */
  direction: PropTypes.string,
  /** Add addition className for Checkbox element */
  className: PropTypes.string,
}

CheckboxGroup.defaultProps = {
  checked: false,
  disabled: false,
  theme: 'light',
  direction: 'col',
  span: 30,
}

export default CheckboxGroup
