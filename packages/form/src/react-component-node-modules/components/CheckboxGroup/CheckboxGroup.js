import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem } from 'polished'

const CheckboxGroup = ({ children, direction, span, className }) => {
  const StyledCheckboxGroup = styled.div`
    /* CheckboxGroup Direction */
    display: flex;
    flex-flow: ${direction === 'column' || direction === 'col'
        ? 'column'
        : 'row'}
      wrap;
    justify-content: space-around;
    align-items: flex-start;

    /* Gap between checkboxes  */
    > * {
      margin-bottom: ${rem(direction === / ^col$|^column$ / ? span : 0)};
      margin-right: ${rem(direction === 'row' ? span : 0)};
    }
  `

  return (
    <StyledCheckboxGroup className={className}>{children}</StyledCheckboxGroup>
  )
}

CheckboxGroup.propTypes = {
  /** The margin pixels between Checkboxes  */
  span: PropTypes.number,
  /** The driection of Checkboxes. Can be Row or Column */
  direction: PropTypes.string,
  /** Add addition className for Checkbox element */
  className: PropTypes.string,
  /** Capability for adding multiple Checkbox inside CheckboxGroup */
  children: PropTypes.node,
}

CheckboxGroup.defaultProps = {
  direction: 'col',
  span: 30,
}

export default CheckboxGroup
