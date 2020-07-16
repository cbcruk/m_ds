import React, { forwardRef, Ref } from 'react'
import Button from '../Button'
import * as styles from './style'

interface Props {
  title: string
  children: React.ReactNode
  onDelete(): void
  onCancel(): void
  onClose(): void
}

function Dialog(props: Props, ref: Ref<HTMLDivElement>) {
  const { title, children, onDelete, onCancel } = props

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.header}>
        {title}
        <Button className={styles.close}>X</Button>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Button pattern="p0" onClick={onDelete}>
          Delete
        </Button>
        <Button isText onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default forwardRef<HTMLDivElement, Props>(Dialog)
