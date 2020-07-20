import React, { Children, cloneElement, ReactElement } from 'react'

interface Props {
  children: ReactElement[]
}

function UnorderedList({ children }: Props) {
  return (
    <ul>
      {Children.map(children, child => {
        return <li>{cloneElement(child)}</li>
      })}
    </ul>
  )
}

export default UnorderedList
