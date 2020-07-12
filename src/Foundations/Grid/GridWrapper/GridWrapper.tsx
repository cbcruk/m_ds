import * as React from 'react'
import styles from './style'

const GridWrapper: React.FC = ({ children }) => {
  return (
    <>
      <h2 className={styles.title}>Grid sizes</h2>
      {children}
    </>
  )
}

export default GridWrapper
