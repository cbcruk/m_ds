import React, { forwardRef } from 'react'
import styles from './style'

interface Props {
  children: React.ReactNode
}

const ComboWrapper = forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <div ref={ref} className={styles.wrapper}>
    {children}
  </div>
))

export default ComboWrapper
