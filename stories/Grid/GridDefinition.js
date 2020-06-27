// @ts-check
/** @jsx h */
import { h } from 'preact'
import { css } from 'emotion'
import range from 'lodash/range'
import Grid, { GridItem } from './Grid'

/**
 * @param {Object} props
 * @param {number} props.size
 */
function GridDefinition({ size }) {
  return (
    <div class={styles.wrapper}>
      <h2 class={styles.title}>Size 1 of {size}</h2>
      <Grid size={size}>
        {range(size).map(() => (
          <GridItem>1 / {size}</GridItem>
        ))}
      </Grid>
    </div>
  )
}

const styles = {
  wrapper: css({
    marginBottom: 24,
  }),
  title: css({
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 18,
  }),
}

export default GridDefinition
