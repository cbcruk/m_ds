import React, { ReactNode } from 'react'
import * as styles from './style'
import { cx } from 'emotion'

interface Props {
  activityTime: string
  icon: string
  title: string | ReactNode
  children: ReactNode
}

function Time({ activityTime, icon, title, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <div className={styles.time}>{activityTime}</div>
        <div className={styles.circle}>
          <div className={cx([styles.icon, icon])} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{children}</div>
      </div>
    </div>
  )
}

export default Time
