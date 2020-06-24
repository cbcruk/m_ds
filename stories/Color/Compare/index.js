// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css } from 'emotion'
import Aa from './Aa'
import getLevels from './getLevels'

/**
 * @param {Object} props
 * @param {string} props.color
 */
function Compare({ color }) {
  const [coconut, kale, peppercorn] = getLevels(color)

  return (
    <table class={styles.table}>
      <thead class={styles.thead}>
        <tr>
          <th></th>
          <th title=">=14 or <18">16px</th>
          <th title=">=18">24px</th>
        </tr>
      </thead>
      <tbody>
        <Aa name="coconut" result={coconut} />
        <Aa name="kale" result={kale} />
        <Aa name="peppercorn" result={peppercorn} />
      </tbody>
    </table>
  )
}

const styles = {
  table: css({
    borderCollapse: 'collapse',
    fontSize: 14,
  }),
  thead: css({
    th: {
      minWidth: 143,
      fontWeight: 400,
      textAlign: 'left',
    },
  }),
}

export default Compare
