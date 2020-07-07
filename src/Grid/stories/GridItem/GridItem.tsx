import * as React from 'react'
import styles from './style'

const GridItem: React.FC = ({ children }) => (
  <div className={styles.item}>{children}</div>
)

export default GridItem
