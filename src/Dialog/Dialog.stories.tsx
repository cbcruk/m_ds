import React from 'react'
import Button from '../Button'
import Dialog from './Dialog'
import { useModal, ActionTypes } from './hooks'

export default {
  title: 'Dialog',
  component: Dialog
}

export const Default = () => {
  const { state, handleModal } = useModal()

  return (
    <>
      <Button onClick={() => handleModal(ActionTypes.SHOW_MODAL)}>
        Show Generic Modal
      </Button>
      <Dialog
        isOpen={state.isOpen}
        title="Are you sure?"
        submitText="Delete"
        handleClose={() => handleModal(ActionTypes.HIDE_MODAL)}
      >
        <p>You're about to delete this campaign.</p>
      </Dialog>
    </>
  )
}
