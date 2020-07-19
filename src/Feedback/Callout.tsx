import React, { ReactNode } from 'react'
import { cx } from 'emotion'
import { LightBulbIcon } from '@primer/octicons-react'
import * as styles from './style'

interface Props {
  children: ReactNode
}

function Callout({ children }: Props) {
  return (
    <div className={cx(styles.wrapper, styles.callout.base)}>
      <div className={styles.callout.icon}>
        <LightBulbIcon size={16} verticalAlign="top" />
      </div>
      <div className={styles.body}>
        <p className={styles.desc}>
          <strong>Tip:</strong> {children}
        </p>
      </div>
    </div>
  )
}

export default Callout
