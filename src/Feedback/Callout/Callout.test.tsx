import React from 'react'
import { render } from '@testing-library/react'
import Callout from './Callout'

describe('Callout', () => {
  it('Callout', () => {
    const { debug, getByTestId } = render(
      <Callout>
        This is a tip with a single column. It will automatically have
        .readable-max-width applied, so no need to worry that it will get too
        big for its britches. That's why it doesn't go all the way to the edge
        like its columned brethren below.
      </Callout>
    )
    const wrapper = getByTestId('Callout')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent(/This is a tip with a single column/)
  })
})
