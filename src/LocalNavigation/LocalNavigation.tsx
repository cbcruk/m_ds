import React, { Children, cloneElement, ReactElement } from 'react'
import * as styles from './style'
import { cx } from 'emotion'

interface Props {
  children: ReactElement[]
  className?: HTMLElement['className']
}

function LocalNavigation({ children, className }: Props) {
  return (
    <nav className={cx([styles.wrapper, className])}>
      {Children.map(children, child => {
        return <span className={styles.item}>{cloneElement(child)}</span>
      })}
    </nav>
  )
}

export default LocalNavigation
