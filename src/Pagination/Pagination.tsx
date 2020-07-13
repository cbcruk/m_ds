import * as React from 'react'
import styles from './style'

const Pagination = ({ children }) => (
  <div className={styles.wrapper}>
    {React.Children.map(children, child => {
      return React.cloneElement(child, {
        className: styles.item
      })
    })}
  </div>
)

export default Pagination
