import React, { useReducer } from 'react'
import Button from '../Button'
import styles from './style'
import { cx } from 'emotion'

interface Tab {
  id: string
  name: string
}

interface Props {
  tabs: Tab[]
  active?: string
  isNavs?: boolean
}

const Tabs: React.FC<Props> = ({
  tabs,
  active = '',
  isNavs = false
}: Props) => {
  const [state, dispatch] = useReducer((_, action) => action, active)

  return (
    <div
      className={cx({
        [styles.wrapper]: true,
        [styles.isNavs]: isNavs
      })}
    >
      {tabs.map(tab => (
        <Button
          key={tab.id}
          className={cx({
            [styles.link]: isNavs,
            [styles.button]: !isNavs,
            'is-active': state === tab.id
          })}
          onClick={() => dispatch(tab.id)}
        >
          {isNavs ? (
            <span className={styles.underline}>{tab.name}</span>
          ) : (
            tab.name
          )}
        </Button>
      ))}
    </div>
  )
}

export default Tabs
