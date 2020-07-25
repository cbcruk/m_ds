import React, { ReactNode, useReducer } from 'react'
import { cx } from 'emotion'
import * as styles from './style'
import LocalNavigation from '../LocalNavigation'

interface Props {
  tabs: string[]
  activeIndex: number
  children(index: number): ReactNode
}

function Tabs({ tabs, activeIndex = 0, children }: Props) {
  const [state, dispatch] = useReducer((_, action) => action, activeIndex)

  return (
    <div className={styles.wrapper}>
      <LocalNavigation className={cx(['is-tabs', styles.tabs])}>
        {tabs.map((tab, index) => (
          <a
            key={index}
            href="#Tabs_body"
            className={cx({
              'is-active': index === state
            })}
            onClick={e => {
              e.preventDefault()
              dispatch(index)
            }}
          >
            {tab}
          </a>
        ))}
      </LocalNavigation>

      <div id="Tabs_body" className={styles.body}>
        {children(state)}
      </div>
    </div>
  )
}

export default Tabs
