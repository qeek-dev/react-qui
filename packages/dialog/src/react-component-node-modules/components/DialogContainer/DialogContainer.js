import React from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import { setPropTypes, defaultProps, compose } from 'recompose'

import styles from './DialogContainer.scss'
import closeIcon from '../../assets/delete.svg'

const cx = classnames.bind(styles)

const DialogContainer = ({ children, visible, onClose, className }) => {
  const inlineStyle = {
    display: visible ? 'block' : 'none',
  }

  return (
    <div style={inlineStyle} className={cx('dialog-container', className)}>
      <div className={cx('close-icon')} onClick={onClose}>
        <img
          src={closeIcon}
          alt="close"
        />
      </div>
      <div className={cx('dialog-content')}>{children}</div>
    </div>
  )
}

const enhancer = compose(
  setPropTypes({
    className: PropTypes.string,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
  }),
  defaultProps({
    visible: false,
  }),
)

export default enhancer(DialogContainer)
