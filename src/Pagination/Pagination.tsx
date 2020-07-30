import React, { ReactElement } from 'react'
import * as styles from './style'

interface Props {
  children: ReactElement[]
}

function Pagination({ children }: Props) {
  return (
    <div className={styles.wrapper} data-testid="Pagination">
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: styles.item
        })
      })}
    </div>
  )
}

export default Pagination
