import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { flatten, repeat, map, compose } from 'ramda'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/zip'

class Loader extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    timeout: PropTypes.number,
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
  }

  constructor(props) {
    super(props)

    const { phases } = props
    const renderQueue = this.getRenderQueue(phases)
    this.state = {
      renderQueue,
      currentRender: renderQueue[0],
      isTimeout: false,
    }

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

  _getRenderQueue = compose(
    flatten,
    map(({ render, duration }) => repeat(render, duration)),
  )

  getRenderQueue(phases) {
    if (phases.length < 1)
      throw new Error('phases prop must has at least one element')
    return this._getRenderQueue(phases)
  }

  getPhasesObservableSource = queue => {
    return Observable.zip(
      Observable.timer(0, 1000),
      Observable.from(queue),
      (time, v) => v,
    )
  }

  enableLoader() {
    this.resetRenderQueue()
    this.timerSub = this.getPhasesObservableSource(
      this.state.renderQueue,
    ).subscribe(render => this.setState(_ => ({ currentRender: render })))
    this.handleTimeout()
  }

  resetRenderQueue() {
    if (this.timerSub) this.timerSub.unsubscribe()
    this.setState(prevState => ({
      currentRender: prevState.renderQueue[0],
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
      <div style={style}>{this.state.currentRender(this.props, this.state)}</div>
    )
  }
}

export default Loader
