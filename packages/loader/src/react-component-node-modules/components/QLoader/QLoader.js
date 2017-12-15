import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { Button } from 'react-qui-button'

import Spinner from './Spinner'
import Loader from '../Loader/Loader'

import styles from './QLoader.scss'

const cx = classnames.bind(styles)

class QLoader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,

    // loader
    visible: PropTypes.bool,
    cancelable: PropTypes.bool,
    showProgress: PropTypes.bool,
    showCounter: PropTypes.bool,
    cancelButtonWord: PropTypes.string,
    descriptionPhase1: PropTypes.string,
    detailPhase1: PropTypes.string,
    descriptionPhase2: PropTypes.string,
    detailPhase2: PropTypes.string,
    remainMessage: PropTypes.string,
    remainTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onCancel: PropTypes.func,

    // timeout
    timeout: PropTypes.number,
    onTimeout: PropTypes.func,
    renderTimeout: PropTypes.func,
    // timeoutMessage: PropTypes.string,
    // onRetry: PropTypes.func,
    // onTimeoutCancel: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    visible: false,
    cancelable: false,
    showProgress: false,
    showCounter: false,
    cancelButtonWord: '',
    descriptionPhase1: '',
    detailPhase1: '',
    descriptionPhase2: '',
    detailPhase2: '',
    remainMessage: '',
    remainTime: '--:--:--',
    percent: 0,
    timeout: 15000,
  }

  handleCancelClick = () => {
    const { onCancel } = this.props
    if (onCancel) onCancel()
  }

  // icon-loader
  renderLoader = (description, detail) => {
    const {
      // loader
      cancelable,
      showProgress,
      showCounter,
      cancelButtonWord,
      remainMessage,
      remainTime,
      percent,
    } = this.props

    return (
      <div className={cx('icon-loader', 'loader-container')}>
        {showProgress ? (
          <Spinner className={cx('spinner')} type="progress" percent={percent} />
        ) : (
          <Spinner className={cx('spinner')} type="normal" />
        )}
        <div className={cx('text-block')}>
          <p className={cx('main-description')}>{description}</p>
          {detail ? <p className={cx('detail')}>{detail}</p> : null}
        </div>
        {showCounter ? (
          <div className={cx('remain-time')}>
            <span>{remainMessage}</span>
            <span>{remainTime.toString()}</span>
          </div>
        ) : null}
        {cancelable ? (
          <Button
            className={cx('btn-cancel')}
            theme="dark"
            onClick={this.handleCancelClick}
          >
            {cancelButtonWord}
          </Button>
        ) : null}
      </div>
    )
  }

  renderPhase1Component = () =>
    this.renderLoader(this.props.descriptionPhase1, this.props.detailPhase1)

  renderPhase2Component = () =>
    this.renderLoader(this.props.descriptionPhase2, this.props.detailPhase2)

  render() {
    const { visible, timeout, onTimeout, renderTimeout } = this.props
    const loaderOps = {
      visible,
      timeout,
      onTimeout,
      /*
        TODO: renderTimeout set by react-qui-modal
      */
      renderTimeout,
      phases: [
        {
          render: this.renderPhase1Component,
          duration: 8,
        },
        {
          render: this.renderPhase2Component,
          duration: 15,
        },
      ],
    }

    return <Loader {...loaderOps} />
  }
}

export default QLoader
