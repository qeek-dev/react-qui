import React, { PureComponent } from 'react'
import classnames from 'classnames/bind'
import styles from './Button.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)


export default class Button extends PureComponent {
  static propTypes = {
    theme: PropTypes.string,
    shape: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: 'light',
    shape: 'square',
  }

  render() {
    const { shape, theme, className, disabled } = this.props
    
    return disabled ? <button disabled className={cx(['qbtn', shape, theme, className])}>{this.props.children}</button> : <button className={cx(['qbtn', shape, theme, className])}>{this.props.children}</button>
  }
}

Button.propTypes = {
  shape: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
}
