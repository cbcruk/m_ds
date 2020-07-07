import * as React from 'react'
import { cx } from 'emotion'
import styles from './style'
import { Props } from './types'

const Grid: React.FC<Props> = ({ size, children }) => (
  <div className={cx([styles.wrapper, styles.repeat(size)])}>{children}</div>
)

export default Grid
