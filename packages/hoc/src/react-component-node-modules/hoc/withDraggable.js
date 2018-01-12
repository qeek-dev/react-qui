import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { toClass } from 'recompose'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/operator/withLatestFrom'


const initialParams = {
  position: 'fixed',
  zIndex: '99999',
  center: true,
}

const withDraggable = (opts = initialParams) => C => {
  const ClassComponent = toClass(C)

  class Draggable extends Component {
    state = {
      width: 0,
      height: 0,
      top: '50%',
      left: '50%',
    }

    constructor(props) {
      super(props)

      this.ref = null
      this.mouseDown$ = null
      this.mouseMove$ = null
      this.mouseUp$ = null
      this.mouseSource$ = null
    }

    componentDidMount = () => {
      window.addEventListener('load', this.handleDOMLoaded)
    }

    handleDOMLoaded = () => {
      this.setChildSize()

      const { width, height } = this.state
      const node = ReactDOM.findDOMNode(this.ref)

      this.mouseDown$ = Observable.fromEvent(node, 'mousedown')
      this.mouseMove$ = Observable.fromEvent(document, 'mousemove')
      this.mouseUp$ = Observable.fromEvent(document, 'mouseup')
      this.mouseSource$ = this.mouseDown$
        .debounceTime(50)
        .concatMap(_ => this.mouseMove$.takeUntil(this.mouseUp$))
        .withLatestFrom(
          this.mouseDown$,
          ({ clientX, clientY }, { offsetX, offsetY }) => ({
            x: this.fitBoundary(
              clientX - offsetX,
              window.innerWidth - width,
              0,
            ),
            y: this.fitBoundary(
              clientY - offsetY,
              window.innerHeight - height,
              0,
            ),
          }),
        )

      this.mouseSource$.subscribe(({ x, y }) =>
        this.setState(prevState => ({ top: y, left: x })),
      )
    }

    setChildSize = () => {
      const node = ReactDOM.findDOMNode(this.ref)
      if (node) {
        const { width, height } = node.getBoundingClientRect()
        this.setState(prevState => ({ width, height }))
      }
    }

    fitBoundary = (value, max, min) => Math.min(Math.max(value, min), max)

    render = () => {
      const { top, left } = this.state
      const styleOpts = { ...initialParams, ...opts }
      const { center, position, zIndex } = styleOpts
      const inlineStyle = {
        transform:
          !center || top !== `50%` || left !== `50%`
            ? null
            : `translate(-50%, -50%)`,
        position,
        zIndex: zIndex.toString(),
        top,
        left,
      }
      return (
        <div style={inlineStyle}>
          <ClassComponent ref={ref => (this.ref = ref)} {...this.props} />
        </div>
      )
    }
  }

  return Draggable
}

export default withDraggable
