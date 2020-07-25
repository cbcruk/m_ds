import React, { ReactNode } from 'react'
import * as styles from './style'

interface Props {
  activityDate: string
  children: ReactNode
}

function Timeline({ activityDate, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{activityDate}</div>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default Timeline
