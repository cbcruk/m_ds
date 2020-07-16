import * as React from 'react'
import Button from '../Button'
import Dialog from './Dialog'

export default {
  title: 'Dialog',
  component: Dialog
}

export const Default = () => {
  return (
    <>
      <Button>Show Generic Modal</Button>
      <Dialog
        title="Are you sure?"
        onDelete={() => {}}
        onCancel={() => {}}
        onClose={() => {}}
      >
        <p>You're about to delete this campaign.</p>
      </Dialog>
    </>
  )
}
