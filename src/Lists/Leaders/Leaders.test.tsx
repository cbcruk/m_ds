import React from 'react'
import { render } from '@testing-library/react'
import Leaders from './Leaders'

describe('Leaders', () => {
  it('Leaders', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Leaders
        items={[
          { label: 'List average', value: '61.7%' },
          {
            label: 'Industry average',
            value: '61.7%'
          }
        ]}
      />
    )
    const wrapper = getByTestId('Leaders')
    const item = queryAllByTestId('Leaders-item')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper.childElementCount).toBe(2)
    expect(item[0]).toHaveTextContent(/List average|61.7%/)
  })
})
