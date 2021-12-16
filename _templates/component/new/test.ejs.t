---
to: src/<%= name %>/<%= name %>.test.tsx
---
import React from 'react'
import { render } from '@testing-library/react'
import <%= name %> from './<%= name %>'

describe('<%= name %>', () => {
  it('<%= name %>', () => {
    const { getByTestId } = render(
      <<%= name %>></<%= name %>>
    )
    const wrapper = getByTestId('<%= name %>')

    expect(wrapper).toBeInTheDocument()
  })
})
