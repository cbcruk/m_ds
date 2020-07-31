import React, { Children, cloneElement, ReactElement } from 'react'
import { cx } from 'emotion'
import * as styles from './style'

interface Props {
  children: ReactElement | ReactElement[]
  className?: HTMLElement['className']
}

function LocalNavigation({ children, className }: Props) {
  return (
    <nav
      className={cx([styles.wrapper, className])}
      data-testid="LocalNavigation"
    >
      {Children.map(children, child => {
        return (
          <span className={styles.item} data-testid="LocalNavigation-item">
            {cloneElement(child)}
          </span>
        )
      })}
    </nav>
  )
}

export default LocalNavigation
