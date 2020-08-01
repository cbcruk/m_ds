import React, { ReactNode } from 'react'
import * as styles from './style'

interface Props {
  activityDate: string
  children: ReactNode
}

function Timeline({ activityDate, children }: Props) {
  return (
    <div className={styles.wrapper} data-testid="Timeline">
      <div className={styles.date} data-testid="Timeline-date">
        {activityDate}
      </div>
      <div className={styles.children} data-testid="Timeline-children">
        {children}
      </div>
    </div>
  )
}

export default Timeline
