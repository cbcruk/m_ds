import * as React from 'react'
import { cx } from 'emotion'
import styles from './style'

export interface Props {
  size: number
  children: React.ReactNode
}

const Grid: React.FC<Props> = ({ size, children }: Props) => (
  <div className={cx([styles.wrapper, styles.repeat(size)])}>{children}</div>
)

export default Grid
