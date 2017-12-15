import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToastrContainer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number,
  }

  static defaultProps = {
    duration: '5',
  }

  render() {
    const { width, height, duration } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { width, height, duration })
    })

    return <div> {children} </div>
  }
}

ToastrContainer.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.number,
}
