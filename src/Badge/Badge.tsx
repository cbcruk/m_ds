import React, { ReactNode } from 'react'
import { cx } from 'emotion'
import * as styles from './style'

export enum Status {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  New = 'new',
  Pro = 'pro',
  Notification = 'notification'
}

interface Props {
  status?: Status
  children: ReactNode
}

function Badge({ status = Status.Default, children }: Props) {
  return (
    <span
      data-testid="Badge"
      className={cx([styles.wrapper, styles.status], {
        [`is-${status}`]: true
      })}
    >
      {children}
    </span>
  )
}

export default Badge
