import React, { Children, cloneElement, ReactElement } from 'react'
import { cx } from 'emotion'
import * as styles from './style'

interface Props {
  className?: HTMLElement['className']
  children: ReactElement[]
  onClick?: () => void
}

function UnorderedList({ className, children, ...props }: Props) {
  return (
    <ul
      className={cx([styles.wrapper, className])}
      {...props}
      data-testid="UnorderedList"
    >
      {Children.map(children, child => {
        return (
          <li className={styles.item} data-testid="UnorderedList-item">
            {cloneElement(child)}
          </li>
        )
      })}
    </ul>
  )
}

export default UnorderedList
