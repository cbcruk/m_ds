import React from 'react'
import { render } from '@testing-library/react'
import Progress from './Progress'

describe('Progress', () => {
  it('Progress', () => {
    const { debug, getByTestId } = render(
      <Progress step={9} activeStepIndex={0} />
    )
    const wrapper = getByTestId('Progress')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper.querySelector('.is-active')).toHaveTextContent('0')
    expect(wrapper.childElementCount).toBe(9)
  })
})
