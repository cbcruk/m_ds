// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css } from 'emotion'
import Compare from './Compare'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.color
 */
function Color({ label, color }) {
  return (
    <div class={styles.wrapper} style={{ '--color-theme': color }}>
      <div class={styles.label}>{label}</div>
      <div class={styles.color}>
        <div class={styles.code}>{color}</div>
        <Compare color={color} />
      </div>
    </div>
  )
}

const styles = {
  wrapper: css({
    height: 156,
    padding: '24px 18px',
    backgroundColor: 'var(--color-theme)',
  }),
  label: css({
    fontWeight: 600,
  }),
  color: css({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
  }),
  code: css({
    fontFamily: 'monospace',
  }),
}

export default Color
