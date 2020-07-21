import React, { Children, cloneElement, ReactElement } from 'react'
import styles from '../Pagination/style'

interface Props {
  children: ReactElement[]
}

function LocalNavigation({ children }: Props) {
  return (
    <nav className={styles.wrapper}>
      {Children.map(children, child => {
        return <span className={styles.item}>{cloneElement(child)}</span>
      })}
    </nav>
  )
}

export default LocalNavigation
