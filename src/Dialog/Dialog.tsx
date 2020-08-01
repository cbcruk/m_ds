import React from 'react'
import Modal from 'react-modal'
import noop from 'lodash/noop'
import Button from '../Button'
import * as styles from './style'

interface Props {
  title: string
  submitText?: string
  cancelText?: string
  children: React.ReactNode
  isOpen: boolean
  onSubmit?: () => void
  onCancel?: () => void
  handleClose(): void
}

function Dialog({
  title,
  submitText,
  cancelText = 'Cancel',
  children,
  isOpen = false,
  onSubmit = noop,
  onCancel = noop,
  handleClose
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      onRequestClose={handleClose}
      ariaHideApp={process.env.NODE_ENV !== 'test'}
    >
      <div className={styles.wrapper} data-testid="Dialog">
        <div className={styles.header} data-testid="Dialog-header">
          {title}
          <Button className={styles.close} onClick={handleClose}>
            X
          </Button>
        </div>
        <div className={styles.body} data-testid="Dialog-body">
          {children}
        </div>
        <div className={styles.footer}>
          <Button
            pattern="p0"
            onClick={() => {
              onSubmit()
              handleClose()
            }}
          >
            {submitText}
          </Button>
          <Button
            isText
            onClick={() => {
              onCancel()
              handleClose()
            }}
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Dialog
