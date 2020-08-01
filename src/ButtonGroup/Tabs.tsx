import React from 'react'
import { cx } from 'emotion'
import Button from '../Button'
import * as styles from './style'

interface Tab {
  id: string
  name: string
}

interface Props {
  tabs: Tab[]
  active?: string
  isNavs?: boolean
}

function Tabs({ tabs, active = '', isNavs = false }: Props) {
  return (
    <div
      className={cx([styles.wrapper], {
        'is-navs': isNavs
      })}
      data-testid="Tabs"
    >
      {tabs.map(tab => (
        <Button
          key={tab.id}
          isText={isNavs}
          className={cx({
            [styles.button]: !isNavs,
            'is-active': active === tab.id
          })}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  )
}

export default Tabs
