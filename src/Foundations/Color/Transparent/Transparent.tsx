import * as React from 'react'
import styles from './styles'

const Transparent: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

export default Transparent
