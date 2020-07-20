import React from 'react'
import { cx } from 'emotion'

type SeparatedType = 'dots' | 'spaces'

interface Props {
  items: string[]
  separated: SeparatedType
}

function Linear({ items, separated }: Props) {
  return (
    <ul
      className={cx({
        [`is-${separated}`]: true
      })}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default Linear
