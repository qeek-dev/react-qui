import React, { Component } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/ToastrContainer.scss'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './styles/animation.css'
import styled from 'styled-components'

const cx = classnames.bind(styles)

export default class ToastrContainer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number,
    position: PropTypes.string,
    className: PropTypes.string,
    render: PropTypes.func,
  }

  static defaultProps = {
    duration: 5,
    position: 'top-right',
  }
  constructor(props) {
    super(props)

    this.state = {
      queue: [],
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.queue !== nextState.queue
  }

  trigger = () => {
    const { width, height, duration } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        width,
        height,
        duration,
        key: shortid.generate(),
      })
    })

    if (this.state.queue.length < 0) return
    this.setState(prevState => ({
      queue: prevState.queue.concat(children),
    }))

    if (this.state.queue.length < 0) return
    window.setTimeout(() => {
      let newItems = this.state.queue.slice(1)

      this.setState(prevState => ({
        queue: newItems,
      }))
    }, 3000)
  }

  render() {
    const { position, className, duration } = this.props

    return (
      <div className={cx([position, className])}>
        <div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={0.1}
            transitionLeaveTimeout={1000}
          >
            {this.state.queue}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
