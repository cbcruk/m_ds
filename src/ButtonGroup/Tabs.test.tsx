import React from 'react'
import { render } from '@testing-library/react'
import Tabs from './Tabs'

describe('Tabs', () => {
  beforeEach(() => {})

  it('Tabs', () => {
    const { debug, getByTestId } = render(
      <Tabs
        tabs={[
          { id: 'desktop', name: 'Desktop' },
          { id: 'tablet', name: 'Tablet' },
          { id: 'phone', name: 'Phone' }
        ]}
        isNavs
        active="desktop"
      />
    )
    const wrapper = getByTestId('Tabs')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('is-navs')
    expect(wrapper.querySelector('.is-active')).toHaveTextContent(/Desktop/)
  })
})
