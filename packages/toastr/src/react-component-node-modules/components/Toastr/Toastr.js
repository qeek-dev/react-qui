import React, { PureComponent } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/Toastr.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

export default class Toastr extends PureComponent {
  static propTypes = {
    btnStyle: PropTypes.oneOf([
      'qts',
      'photo-st',
      'music-st',
      'file-st',
      'download-st',
      'video-st',
    ]),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ]),
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    btnStyle: 'qts',
  }

  render() {
    const { btnStyle, children, className } = this.props

    return (
      <div className={cx(['toastr', btnStyle, className])}> {children} </div>
    )
  }
}

Toastr.PropTypes = {
  btnStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}
