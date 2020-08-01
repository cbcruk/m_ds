import React from 'react'
import { render } from '@testing-library/react'
import Grid from './Grid'

describe('Grid', () => {
  it('Grid', () => {
    const { debug, getByTestId } = render(
      <Grid size={1}>
        <div />
      </Grid>
    )
    const wrapper = getByTestId('Grid')

    debug()

    expect(wrapper).toBeInTheDocument()
  })
})
