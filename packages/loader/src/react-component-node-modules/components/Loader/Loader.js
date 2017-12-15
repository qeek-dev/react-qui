import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/zip'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/repeat'

class Loader extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    timeout: PropTypes.number,
    timeInterval: PropTypes.number,
    onTimeout: PropTypes.func,
    renderTimeout: PropTypes.func,
    phases: PropTypes.arrayOf(
      PropTypes.shape({
        render: PropTypes.func.isRequired,
        duration: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }

  static defaultProps = {
    visible: false,
    timeout: 15000,
    timeInterval: 500,
  }

  constructor(props) {
    super(props)

    const { phases } = props
    if (phases.length < 1)
      throw new Error('phases prop must has at least one element')

    this.state = {
      currentRender: phases[0]['render'],
      isTimeout: false,
    }

    this.timer$ = null
    this.timerSub = null
    this.timeoutID = undefined
  }

  componentDidMount() {
    const { visible } = this.props
    if (visible) this.enableLoader()
  }

  componentWillUnmount() {
    if (this.timerSub) this.timerSub.unsubscribe()
    if (this.timeoutID) window.clearTimeout(this.timeoutID)
  }

  componentWillReceiveProps = nextProps => {
    const { visible } = nextProps
    if (visible && !this.props.visible) {
      this.enableLoader()
    }
  }

  getPhasesObservableSource = () => {
    const { phases, timeInterval } = this.props
    const source$ = Observable.from(phases)

    this.timer$ = Observable.timer(0, timeInterval)

    return Observable.zip(
      this.timer$,
      source$.mergeMap(phase =>
        Observable.from([phase.render]).repeat(parseInt(phase.duration / timeInterval, 10)),
      ),
      (time, v) => v,
    )
  }

  enableLoader() {
    this.resetState()
    this.timerSub = this.getPhasesObservableSource(
      this.state.renderQueue,
    ).subscribe(render => this.setState(_ => ({ currentRender: render })))
    this.handleTimeout()
  }

  resetState() {
    const { phases } = this.props
    if (this.timerSub) this.timerSub.unsubscribe()
    if (phases.length < 1)
      throw new Error('phases prop must has at least one element')

    this.setState(_ => ({
      currentRender: phases[0]['render'],
      isTimeout: false,
    }))
  }

  handleTimeout = () => {
    const { timeout, onTimeout } = this.props
    if (this.timeoutID) window.clearTimeout(this.timeoutID)
    this.timeoutID = window.setTimeout(() => {
      if (onTimeout) onTimeout()
      this.setState(_ => ({ isTimeout: true }))
    }, timeout)
  }

  render() {
    const { visible, renderTimeout } = this.props
    const { isTimeout } = this.state
    const style = {
      visibility: visible ? 'visible' : 'hidden',
    }
    const isRenderTimeout = isTimeout && renderTimeout

    return isRenderTimeout ? (
      <div style={style}>{renderTimeout(this.props, this.state)}</div>
    ) : (
      <div style={style}>
        {this.state.currentRender(this.props, this.state)}
      </div>
    )
  }
}

export default Loader
