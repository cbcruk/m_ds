import * as React from 'react'
import { cx } from 'emotion'
import * as styles from './style'

export interface Props {
  size: number
  children: React.ReactNode
}

function Grid({ size, children }: Props) {
  return (
    <div
      className={cx([styles.wrapper, styles.repeat(size)])}
      data-testid="Grid"
    >
      {children}
    </div>
  )
}

export default Grid
