import React, { ReactNode } from 'react'
import { LightBulbIcon } from '@primer/octicons-react'
import * as styles from './style'

interface Props {
  children: ReactNode
}

function Callout({ children }: Props) {
  return (
    <div className={styles.wrapper} data-testid="Callout">
      <div className={styles.icon}>
        <LightBulbIcon size={16} verticalAlign="top" />
      </div>
      <div className={styles.body}>
        <p className={styles.desc} data-testid="Callout-desc">
          <strong>Tip:</strong> {children}
        </p>
      </div>
    </div>
  )
}

export default Callout
