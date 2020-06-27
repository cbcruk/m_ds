// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css, cx } from 'emotion'

/**
 * @param {Object} props
 * @param {number} props.size
 * @param {JSX.Element | JSX.Element[]} props.children
 */
function Grid({ size, children }) {
  return (
    <div class={cx([styles.wrapper, styles[`size1of${size}`]])}>{children}</div>
  )
}

export function GridItem({ children }) {
  return <div class={styles.item}>{children}</div>
}

const styles = {
  wrapper: css({
    display: 'grid',
    gridGap: 16,
    padding: 15,
    backgroundColor: '#bcdba8',
  }),
  size1of8: css({
    gridTemplateColumns: 'repeat(8, 1fr)',
  }),
  size1of4: css({
    gridTemplateColumns: 'repeat(4, 1fr)',
  }),
  size1of3: css({
    gridTemplateColumns: 'repeat(3, 1fr)',
  }),
  size1of2: css({
    gridTemplateColumns: 'repeat(2, 1fr)',
  }),
  size1of1: css({
    gridTemplateColumns: 'repeat(1, 1fr)',
  }),
  item: css({
    padding: 12,
    backgroundColor: '#d8eacc',
    textAlign: 'center',
    fontSize: 14,
  }),
}

export default Grid
