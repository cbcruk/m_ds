import React from 'react'
import { render } from '@testing-library/react'
import LocalNavigation from './LocalNavigation'

describe('LocalNavigation', () => {
  it('LocalNavigation', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <LocalNavigation className="jest">
        <a href="#overview" className="is-active">
          Overview
        </a>
        <a href="#billing">Billing</a>
        <a href="#extras">Extras</a>
        <a href="#integrations">Integrations</a>
      </LocalNavigation>
    )
    const wrapper = getByTestId('LocalNavigation')
    const items = queryAllByTestId('LocalNavigation-item')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('jest')
    expect(items.length).toBe(4)
  })
})
