import * as React from 'react'
import range from 'lodash/range'
import Grid from '../../Grid'
import GridItem from '../GridItem'
import { Props } from './types'
import styles from './style'

const GridDefinition: React.FC<Props> = ({ size }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Size 1 of {size}</h2>
    <Grid size={size}>
      {range(size).map(() => (
        <GridItem>1 / {size}</GridItem>
      ))}
    </Grid>
  </div>
)

export default GridDefinition
