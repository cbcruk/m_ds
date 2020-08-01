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
    <div className={styles.wrapper} data-testid="Time">
      <div className={styles.meta}>
        <div className={styles.time} data-testid="Time-activity">
          {activityTime}
        </div>
        <div className={styles.circle}>
          <div className={cx([styles.icon, icon])} data-testid="Time-icon" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title} data-testid="Time-title">
          {title}
        </div>
        <div className={styles.desc} data-testid="Time-children">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Time
