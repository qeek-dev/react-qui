import React, { PureComponent } from 'react'
import classnames from 'classnames/bind'
import styles from '../QToastr/styles/QToastr.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

export default class QToastr extends PureComponent {
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
      PropTypes.array,
    ]),
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    childProps: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
      PropTypes.array,
    ]),
  }

  static defaultProps = {
    toastrStyle: 'qts',
  }

  getShapeStyle = () => {
    const { width, height } = this.props
    const paddingPixel = 48
    const widthWithoutPadding = width - paddingPixel
    const heightWithoutPadding = height - paddingPixel

    return {
      width: `${widthWithoutPadding}px`,
      height: `${heightWithoutPadding}px`,
    }
  }

  render() {
    const { toastrStyle, children, className } = this.props

    return (
      <div
        style={this.getShapeStyle()}
        className={cx(['toastr', toastrStyle, className])}
      >
        <div>{children}</div>
      </div>
    )
  }
}
