import React, { ReactNode, useReducer } from 'react'
import * as styles from './style'

interface Props {
  label: string
  children: ReactNode
}

function SwitchList({ label, children }: Props) {
  const [state, dispatch] = useReducer((_, action) => action, false)

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => dispatch(true)}>
        {label}
      </button>
      {state && <div className={styles.list}>{children}</div>}
    </div>
  )
}

export default SwitchList
