import React, { Component } from 'react'
import classnames from 'classnames/bind'
import styles from './Button.scss'

const cx = classnames.bind(styles)

export default class Button extends Component {
  render() {
    let type = this.props.type
    let shape = this.props.shape
    let className = cx({
      qbtn: true,
      light: type === 'light',
      dark: type === 'dark',
      rounded: shape === 'rounded',
      square: shape === 'square'
    })

    return <button className={className}>{this.props.text}</button>
  }
}

