import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { $gray01, $bgColor } from '../../styled_global/colors'

import closeIcon from '../../assets/delete.svg'

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  cursor: pointer;

  img {
    width: 9px;
    height: 9px;
  }
`

const Container = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: relative;
  box-sizing: border-box;
  min-width: 340px;
  max-width: 450px;
  padding: 24px;
  background: ${$bgColor};
  border: 1px solid ${$gray01};

  * {
    box-sizing: border-box;
  }
`



const DialogContainer = ({ children, visible, onClose, className }) => (
  <Container className={className} visible={visible}>
    <CloseIcon onClick={onClose}>
      <img src={closeIcon} alt="close" />
    </CloseIcon>
    <div>{children}</div>
  </Container>
)

DialogContainer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
}

DialogContainer.defaultProps = {
  visible: false,
}

export default DialogContainer
