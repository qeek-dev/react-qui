import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@react-qui/button'
import styled from 'styled-components'

import DialogContainer from '../DialogContainer/DialogContainer'

const CancelButton = styled(Button)`
  margin-right: 0;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 20px 0 0 0;
`

const ContentBlock = styled.div`
  margin: 0;
  width: 100%;
  word-break: break-all;
`

const TextDialog = ({
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  ...rest
}) => {
  return (
    <DialogContainer {...rest}>
      <ContentBlock>{children}</ContentBlock>
      <ButtonGroup>
        {confirmText ? (
          <Button theme="light" shape="square" onClick={onConfirm}>
            {confirmText}
          </Button>
        ) : null}
        {cancelText ? (
          <CancelButton theme="light" shape="square" onClick={onCancel}>
            {cancelText}
          </CancelButton>
        ) : null}
      </ButtonGroup>
    </DialogContainer>
  )
}

TextDialog.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
}

TextDialog.defaultProps = {
  visible: false,
}

export default TextDialog
