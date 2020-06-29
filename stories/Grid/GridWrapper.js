// @ts-check
/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact'
import { css } from 'emotion'

/**
 * @param {Object} props
 * @param {JSX.Element[]} props.children
 */
function GridWrapper({ children }) {
  return (
    <Fragment>
      <h1 class={styles.title}>Grid sizes</h1>
      {children}
    </Fragment>
  )
}

const styles = {
  title: css({
    fontSize: 28,
    fontWeight: 400,
    marginBottom: 24,
  }),
}

export default GridWrapper
