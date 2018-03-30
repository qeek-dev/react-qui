import React, { Component } from 'react'
import Select from 'react-select'
import './styles/React-select.css'
import styled from 'styled-components'
import { rem, margin, padding } from 'polished'

const BLACK = '#000000'
const LIGHTBLACK = '#2f2f2f'
const DARKGRAY = '#848484'
const LIGHTGRAY = '#aeaeae'
const WHITE = '#ffffff'
const LIGHTBLUE = '#defefd'

const StyledSelect = styled(Select)`
  .Select-control {
    border-radius: 0;
    border: ${rem('1px')} solid ${DARKGRAY};
    color: ${LIGHTBLACK};
    height: ${rem('22px')};
    font-size: ${rem('12px')};
    margin-left: 0;
    padding-left: ${rem('10px')};

    .Select-input {
      height: ${rem('22px')};
      line-height: ${rem('22px')};

      /* cursor horizon position */
      padding: 0;
      vertical-align: top;

      /* cursor vertical position */
      input {
        padding: 0;
      }

      /* multi-select cursor position*/
      margin: 0;
    }

    .Select-value {
      height: ${rem('22px')};
      line-height: ${rem('22px')};

      /* mutli-select gap between values*/
      ${margin('0px', '5px', '0px', '0px')};
    }

    .Select-placeholder {
      line-height: ${rem('22px')};
    }

    &:hover {
      box-shadow: none;
    }

    /* multi-select */
    .Select-multi-value-wrapper {
      height: ${rem('22px')};
      line-height: ${rem('22px')};

      .Select-value-label,
      .Select-value-icon {
        padding-top: 0;
        padding-bottom: 0;
        vertical-align: top;
      }
    }
  }

  &&&.Select.is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: transparent;
    border-color: ${BLACK};
  }

  &&&.Select.is-focused:not(.is-open) > .Select-control {
    border-color: ${BLACK};
    box-shadow: none;
  }

  &&&.Select.is-disabled > .Select-control {
    background-color: ${WHITE};
    border: ${rem('1px')} solid ${LIGHTGRAY};
    cursor: not-allowed;
  }

  .Select-arrow {
    border-color: ${LIGHTBLACK} transparent transparent;
  }

  &&&.Select .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: ${LIGHTBLACK};
  }

  &&&.Select.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent ${LIGHTBLACK};
  }

  .Select.has-value.is-clearable.Select--single
    > .Select-control
    .Select-value {
    margin-left: 0;
  }

  .Select-menu-outer {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border: ${rem('1px')} solid ${BLACK};
    box-shadow: none;

    .Select-option,
    .Select-noresults {
      ${padding('0px', '10px')};
      height: ${rem('22px')};
      line-height: ${rem('22px')};
      font-size: ${rem('12px')};
    }

    .Select-option {
      color: ${LIGHTBLACK};
    }

    .Select-noresults {
      color: ${LIGHTGRAY};
    }

    .Select-option.is-focused {
      background-color: ${LIGHTBLUE};
      color: ${LIGHTBLACK};
    }

    .Select-option.is-disabled {
      color: ${LIGHTGRAY};
      cursor: not-allowed;
    }
  }

  .Select-clear-zone {
    display: none;
  }
`

const noop = () => {}

class Qselect extends Component {
  render() {
    const {
      value,
      onChange = noop,
      options,
      className,
      disabled,
      ...restProps
    } = this.props

    return (
      <StyledSelect
        className={className}
        value={value}
        disabled={disabled}
        onChange={onChange}
        options={options}
        {...restProps}
      />
    )
  }
}

export default Qselect
