import React, { ReactNode, useReducer } from 'react'
import * as styles from './style'

interface Props {
  tabs: string[]
  activeIndex: number
  children(index: number): ReactNode
}

function Tabs({ tabs, activeIndex = 0, children }: Props) {
  const [state, dispatch] = useReducer((_, action) => action, activeIndex)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => dispatch(index)}>
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.body}>{children(state)}</div>
    </div>
  )
}

export default Tabs
