// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css } from 'emotion'

/**
 * @param {Object} props
 * @param {JSX.Element[]} props.children
 */
function GridWrapper({ children }) {
  return (
    <div class={styles.wrapper}>
      <h1 class={styles.title}>Grid sizes</h1>
      {children}
    </div>
  )
}

const styles = {
  wrapper: css({}),
  title: css({
    fontSize: 28,
    fontWeight: 400,
    marginBottom: 24,
  }),
}

export default GridWrapper
