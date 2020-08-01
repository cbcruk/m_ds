import React from 'react'
import { render } from '@testing-library/react'
import Linear, { Separated } from './Linear'

describe('Linear', () => {
  it('Linear', () => {
    const { debug, getByTestId, queryAllByTestId, rerender } = render(
      <Linear
        items={['item uno', 'item dos', 'item tres']}
        separated={Separated.Dots}
      />
    )
    const wrapper = getByTestId('Linear')
    const items = queryAllByTestId('Linear-item')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('is-dots')
    expect(wrapper).toHaveTextContent(/item uno|item dos|item tres/)
    expect(items.length).toBe(3)

    rerender(<Linear items={[]} separated={Separated.Spaces} />)
    expect(wrapper).toHaveClass('is-spaces')
  })
})
