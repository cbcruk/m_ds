import React, { Children, cloneElement, ReactElement } from 'react'
import * as styles from './style'

interface Props {
  children: ReactElement[]
}

function UnorderedList({ children }: Props) {
  return (
    <ul className={styles.wrapper}>
      {Children.map(children, child => {
        return <li className={styles.item}>{cloneElement(child)}</li>
      })}
    </ul>
  )
}

export default UnorderedList
