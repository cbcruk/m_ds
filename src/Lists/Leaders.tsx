import React from 'react'

interface Item {
  label: string
  value: string
}

interface Props {
  items: Item[]
}

function Leaders({ items }: Props) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}

export default Leaders
