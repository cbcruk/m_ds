import * as React from 'react'
import styles from './style'

const GridWrapper: React.FC = ({ children }) => {
  return (
    <>
      <h1 className={styles.title}>Grid sizes</h1>
      {children}
    </>
  )
}

export default GridWrapper
