import React from 'react'
import { render } from '@testing-library/react'
import Badge, { Status } from './Badge'

describe('Badge', () => {
  it('Badge', () => {
    const { getByTestId } = render(<Badge>Default</Badge>)
    const wrapper = getByTestId('Badge')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('is-default')
    expect(wrapper).toHaveTextContent('Default')
  })

  it.each`
    Name               | Component | props
    ${'Badge default'} | ${Badge}  | ${{ children: 'default' }}
    ${'Badge success'} | ${Badge}  | ${{ children: 'default', status: Status.Success }}
  `('$Name', ({ Component, props }) => {
    const { debug } = render(<Component {...props} />)
  })
})
