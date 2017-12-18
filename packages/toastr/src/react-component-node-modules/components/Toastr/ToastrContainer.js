import React, { Component } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/ToastrContainer.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

export default class ToastrContainer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number,
    position: PropTypes.string,
  }

  static defaultProps = {
    duration: '5',
    position: 'top-right',
  }

  render() {
    const { width, height, duration, position } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { width, height, duration })
    })

    return (
      <div className={cx([position])}>
        <div> {children} </div>
      </div>
    )
  }
}

ToastrContainer.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.number,
  position: PropTypes.string,
}
