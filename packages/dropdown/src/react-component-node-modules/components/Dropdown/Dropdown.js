import React, { Component } from 'react'
import Select from 'react-select'
import './styles/StyledDropdown.css'
import styled from 'styled-components'

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
      <Select
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
