import React from 'react'
import range from 'lodash/range'
import { cx } from 'emotion'
import * as styles from './style'

interface Props {
  step: number
  activeStepIndex: number
}

function Progress({ step, activeStepIndex }: Props) {
  return (
    <div className={styles.wrapper}>
      {range(0, step).map(n => (
        <span
          key={n}
          className={cx({
            [styles.step]: true,
            'is-active': n === activeStepIndex
          })}
        >
          {n}
        </span>
      ))}
    </div>
  )
}

export default Progress
