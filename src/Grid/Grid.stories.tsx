import * as React from 'react'
import Grid from './Grid'
import { GridWrapper, GridDefinition } from './stories'

export default {
  title: 'Grid',
  component: Grid
}

export function Default() {
  return (
    <GridWrapper>
      <GridDefinition size={1} />
      <GridDefinition size={2} />
      <GridDefinition size={3} />
      <GridDefinition size={4} />
      <GridDefinition size={8} />
    </GridWrapper>
  )
}
