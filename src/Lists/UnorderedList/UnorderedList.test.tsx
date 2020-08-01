import React from 'react'
import { render } from '@testing-library/react'
import UnorderedList from './UnorderedList'

describe('UnorderedList', () => {
  it('UnorderedList', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <UnorderedList className="jest">
        <a href="#one" className="is-selected">
          item one
        </a>
        <a href="#two">item two</a>
        <a href="#three">item three</a>
      </UnorderedList>
    )
    const wrapper = getByTestId('UnorderedList')
    const items = queryAllByTestId('UnorderedList-item')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('jest')
    expect(items).toHaveLength(3)
  })
})
