import React, { Component } from 'react'
import Select from 'react-select'
import './styles/OriginalDropdown.css'
import styled from 'styled-components'
import { rem } from 'polished'

const StyledSelect = styled(Select)`
  .Select-control {
    border-radius: 0;
    border: ${rem('1px')} solid #848484;
    color: #2f2f2f;
  }

  .Select-control:hover {
    box-shadow: none;
  }

  &&&.Select.is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: transparent;
    border-color: #000000;
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

  .Select-menu-outer {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border: ${rem('1px')} solid #000000;
    box-shadow: none;
  }

  .Select-clear-zone {
    display: none;
  }
`

class Dropdown extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption })
  }
  render() {
    const { selectedOption } = this.state
    const value = selectedOption && selectedOption.value

    return (
      <StyledSelect
        name="form-field-name"
        className={this.props.className}
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    )
  }
}

export default Dropdown
