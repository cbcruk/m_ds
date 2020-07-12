import * as React from 'react'
import { cx, css } from 'emotion'
import { Props } from './types'
import styles from './style'

const Aa: React.FC<Props> = ({ name, result }) => {
  return (
    <tr className={styles.tr}>
      <td
        className={cx([
          css({
            '--color': `var(--color-brand-${name})`
          }),
          styles.name
        ])}
      >
        {name} text
      </td>
      <td>{result[0] ? 'Pass' : 'Not legible'}</td>
      <td>{result[1] ? 'Pass' : 'Not legible'}</td>
    </tr>
  )
}

export default Aa
