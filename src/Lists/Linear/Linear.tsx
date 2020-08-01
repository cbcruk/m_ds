import React from 'react'
import { cx } from 'emotion'
import * as styles from './style'

export enum Separated {
  Dots = 'dots',
  Spaces = 'spaces'
}

interface Props {
  items: string[]
  separated: Separated
}

function Linear({ items, separated }: Props) {
  return (
    <ul
      className={cx({
        [styles.wrapper]: true,
        [`is-${separated}`]: true
      })}
      data-testid="Linear"
    >
      {items.map((item, index) => (
        <li key={index} className={styles.item} data-testid="Linear-item">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Linear
