import * as React from 'react'
import { cx, css } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import chroma from 'chroma-js'
import Compare from '../Compare'
import { Props } from './types'
import styles from './style'

const Color: React.FC<Props> = ({ label, color, hasBackground }) => {
  const isDarken = chroma(color).luminance() < 0.5

  return (
    <ThemeProvider
      theme={{
        color
      }}
    >
      <div
        className={cx([
          css({
            '--color-theme': color
          }),
          styles.wrapper,
          {
            'is-darken': isDarken
          }
        ])}
      >
        <div className={styles.label}>{label}</div>
        <div className={styles.color}>
          <div className={styles.color}>{color}</div>
          <Compare color={color} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Color
