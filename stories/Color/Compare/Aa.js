// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css } from 'emotion'

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {boolean[]} props.result
 */
function Aa({ name, result }) {
  return (
    <tr class={styles.tr} style={{ '--color': `var(--color-brand-${name})` }}>
      <td class={styles.name}>{name} text</td>
      <td>{result[0] ? 'Pass' : 'Not legible'}</td>
      <td>{result[1] ? 'Pass' : 'Not legible'}</td>
    </tr>
  )
}

const styles = {
  tr: css({
    '&:first-child': {
      borderTop: '1px solid',
      borderBottom: '1px solid',
    },
  }),
  name: css({
    textTransform: 'capitalize',
    color: 'var(--color)',
  }),
}

export default Aa
