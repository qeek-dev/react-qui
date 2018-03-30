import React, { Component } from 'react'
import Select from 'react-select'
import './styles/React-select.css'
import styled from 'styled-components'
import { rem, margin } from 'polished'

const StyledSelect = styled(Select)`
  .Select-control {
    border-radius: 0;
    border: ${rem('1px')} solid #848484;
    color: #2f2f2f;
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
    border-color: #000000;
  }

  &&&.Select.is-focused:not(.is-open) > .Select-control {
    border-color: #000000;
    box-shadow: none;
  }

  &&&.Select.is-disabled > .Select-control {
    background-color: #ffffff;
    border: ${rem('1px')} solid #aeaeae;
    cursor: not-allowed;
  }

  .Select-arrow {
    border-color: #2f2f2f transparent transparent;
  }

  &&&.Select .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #2f2f2f;
  }

  &&&.Select.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent #2f2f2f;
  }

  .Select.has-value.is-clearable.Select--single
    > .Select-control
    .Select-value {
    margin-left: 0;
  }

  .Select-menu-outer {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border: ${rem('1px')} solid #000000;
    box-shadow: none;

    .Select-option,
    .Select-noresults {
      padding: 0 10px;
      height: ${rem('22px')};
      line-height: ${rem('22px')};
      font-size: 12px;
    }

    .Select-option {
      color: #2f2f2f;
    }

    .Select-noresults {
      color: #aeaeae;
    }

    .Select-option.is-focused {
      background-color: #defefd;
      color: #2f2f2f;
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
      name,
      value,
      onChange = noop,
      options,
      className,
      disabled,
      ...restProps
    } = this.props

    return (
      <StyledSelect
        name={name}
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
