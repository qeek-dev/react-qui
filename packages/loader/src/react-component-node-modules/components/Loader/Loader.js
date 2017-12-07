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
    phases: PropTypes.arrayOf(
      PropTypes.shape({
        render: PropTypes.func.isRequired,
        duration: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }

  static defaultProps = {
    visible: false,
  }

  constructor(props) {
    super(props)

    const { phases } = props
    const renderQueue = this.getRenderQueue(phases)
    this.state = {
      renderQueue,
      currentRender: renderQueue[0],
    }

    this.timer = null
  }

  componentDidMount() {
    const { visible } = this.props
    if (visible) this.enableLoader()
  }

  componentWillUnmount() {
    if (this.timer) this.timer.unsubscribe()
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
    this.timer = this.getPhasesObservableSource(
      this.state.renderQueue,
    ).subscribe(render => this.setState(_ => ({ currentRender: render })))
  }

  resetRenderQueue() {
    if (this.timer) this.timer.unsubscribe()
    this.setState(prevState => ({ currentRender: prevState.renderQueue[0] }))
  }

  render() {
    const { visible } = this.props
    const style = {
      visibility: visible? 'visible': 'hidden'
    }
    return <div style={style} >{this.state.currentRender()}</div>
  }
}

export default Loader
