import React, { PureComponent } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/Toastr.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

export default class Toastr extends PureComponent {
  static propTypes = {
    toastrStyle: PropTypes.oneOf([
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
    height: PropTypes.number,
  }

  componentDidMount() {
    this.getContainerStyle(this.props)
  }

  getContainerStyle = () => {
    const { width, height } = this.props
    const widthWithoutPadding = width - 48
    const heightWithoutPadding = height - 48

    return {
      width: `${widthWithoutPadding}px`,
      height: `${heightWithoutPadding}px`,
    }
  }

  render() {
    const { toastrStyle, children, className } = this.props

    return (
      <div
        style={this.getContainerStyle()}
        className={cx(['toastr', toastrStyle, className])}
      >
        {children}
      </div>
    )
  }
}
