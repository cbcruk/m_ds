import React from 'react'
import * as styles from './style'

interface Item {
  label: string
  value: string
}

interface Props {
  items: Item[]
}

function Leaders({ items }: Props) {
  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}

export default Leaders
