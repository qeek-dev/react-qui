import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ className, htmlFor, children, form}) => {
  return (
    <label
      className={className}
      htmlFor={htmlFor}
      form={form}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  form: PropTypes.string,
  children: PropTypes.node,
}

export default Label
