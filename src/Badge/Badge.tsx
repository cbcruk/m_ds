import React, { ReactNode } from 'react'
import { cx } from 'emotion'
import * as styles from './style'

export enum Status {
  default,
  success,
  warning,
  error,
  info,
  new,
  pro,
  notification
}

interface Props {
  status?: Status
  children: ReactNode
}

function Badge({ status = Status.default, children }: Props) {
  return (
    <span
      className={cx([styles.wrapper, styles.status], {
        [`is-${Status[status]}`]: true
      })}
    >
      {children}
    </span>
  )
}

export default Badge
