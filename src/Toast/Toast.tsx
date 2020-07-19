import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as styles from './style'

interface Props {
  isVisible: boolean
  children: ReactNode
}

function Toast({ isVisible, children }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={styles.wrapper}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
