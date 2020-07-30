import React from 'react'
import { render } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('Pagination', () => {
    const { debug, getByTestId } = render(
      <Pagination>
        <a>&lt;</a>
        <a>&gt;</a>
      </Pagination>
    )
    const wrapper = getByTestId('Pagination')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper.childElementCount).toEqual(2)
    expect(wrapper.children[0]).toHaveAttribute('class')
  })
})
